import Box from '../components/box';
import type { NextPage } from 'next';
import { useState } from 'react';
import s from '../styles/Present.module.scss';
import Snow from '../components/snow';
import Name from '../components/name';


const Present: NextPage = () => {
  const [open, setOpen] = useState(false);

  const openBox = () => {
    setOpen(true);
  };
  
  return (
    <main className="main">
      <h1 className={s['open-box']}>Öppna paketet!</h1>
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
