import Box from '../components/box';
import type { NextPage } from 'next';
import { useState } from 'react';
import s from '../styles/Present.module.scss';
import Snow from '../components/snow';
import Name from '../components/name';
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { IPerson } from 'models/Person';
import { FETCH} from 'services/santa.service';

const fetcher = (url: string) => FETCH(url).then((res) => res);

// const fetcher = async (url: string) => {
//   const res = await fetch(url)
//   const data = await res.json()

//   if (res.status !== 200) {
//     throw new Error(data.message)
//   }
//   return data
// }

const Present: NextPage = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { code } = router.query;
  const { data } = useSWR<IPerson>(() => `api/gift/${code}`, fetcher)

  // if (error) return <div>Error</div>
  if (!data) return <div>Loading...</div>
  console.log(data)

  const openBox = () => {
    setOpen(true);
  };
  
  return (
    <main className="main">
      <h1 className={s['open-box']}>
        {data.giver}
      </h1>
      <Box
        onClick={openBox}
        open={open}
      />
      {open && <Name />}
      <Snow />
    </main>
  );
};

export default Present;
