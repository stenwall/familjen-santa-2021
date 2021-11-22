import Box from '../components/box';
import type { NextPage } from 'next';
import { useState } from 'react';
import s from '../styles/Present.module.scss';
import Snow from '../components/snow';
import Name from '../components/name';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { IPerson } from 'models/Person';
import { FETCH } from 'services/santa.service';
// import Rules from 'components/rules';
import Envelope from 'components/envelope';

const fetcher = (url: string) => FETCH(url).then(res => res);

const Present: NextPage = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { code } = router.query;
  const { data } = useSWR<IPerson>(() => `api/gift/${code}`, fetcher);

  if (!data)
    return (
      <>
        <main className="main">
          <div className={s['loading-container']}>
            <div className={s.loading}></div>
          </div>
        </main>
      </>
    );

  console.log(data);

  const openBox = () => {
    setOpen(true);
  };

  return (
    <main className="main">
      <div className={s.container}>
        {!open && (
          <h1 className={s['not-open']}>{data.giver}, öppna paketet!</h1>
        )}
        {open && (
          <h1 className={s.open}>
            Du ska ge till<span>.</span>
            <span>.</span>
            <span>.</span>
          </h1>
        )}
        <Box onClick={openBox} open={open} imgUrl={data.receiver_img} />
        {open && <Name name={data.receiver} />}
      </div>
      <Snow />
      {data && <Envelope />}
    </main>
  );
};

export default Present;
