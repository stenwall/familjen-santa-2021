import mongoose, { Document, model, Schema, Model } from 'mongoose';

export interface PersonDocument extends Document {
  _id?: any | null
  giver: string,
  receiver: string,
  giver_code: number | string,
  receiver_img: string
}

export interface IPerson {
  _id?: any | null
  giver: string,
  receiver: string,
  giver_code: number | string,
  receiver_img: string
}

const PersonSchema: Schema = new Schema<PersonDocument>({
  giver: {
    type: String
  },
  receiver: {
    type: String
  },
  giver_code: {
    type: Number
  },
  receiver_img: {
    type: String
  }
}, { collection: 'people' });

export const Person: Model<PersonDocument> =
  mongoose.models.Person || model('Person', PersonSchema);

  // const Person = model<PersonDocument>('Person', PersonSchema);

  // export default Person;