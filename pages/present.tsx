import type { NextPage } from 'next';
import { useState } from 'react';
import s from '../styles/Present.module.scss';

const Present: NextPage = () => {
  const [open, setOpen] = useState(false);

  const openBox = () => {
    setOpen(true);
  }

  return (
    <main className="main">
      <h3>Hover the box</h3>
      <div className={s['present-wrapper']}>
        <div className={s.box}>
          <div className={open ? [s.open, s['box-wrapper']].join(' ') : s['box-wrapper']} onClick={openBox}>
            <div className={s.glow} />
            <img
              className={[s.img, s.star].join(' ')}
              src="https://via.placeholder.com/150"
            />
            <div className={s['box-body']}>
              <div className={s['box-lid']}>
                <div className={s['box-bow']}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Present;
