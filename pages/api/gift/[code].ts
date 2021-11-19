import type { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';
import { connectToDatabase } from '../../../lib/mongodb';
import { Person } from 'models/Person';

const cors = Cors({
  origin: '*',
  methods: ['GET'],
  credentials: true
});

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function getPerson(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await runMiddleware(req, res, cors);
  console.log(req.query.code);
  const code = req.query.code as unknown as number;
  try {
    await connectToDatabase();
    const person = await Person.findOne({
      giver_code: code
    });
    if (!person) {
      return res
        .status(404)
        .send({ message: `No gift with code: ${code} found.` });
    } else {
      console.log(person)
      return res.status(200).json(person);
    }
  } catch (err: any) {
    console.log(err);
    return res.status(500).send({
      message: `Error retrieving gift with code: ${code}.`,
      error: err.message
    });
  }
}
