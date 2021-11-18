import type { NextPage } from 'next';
import s from '../styles/Present.module.scss';

const Present: NextPage = () => {
  return (
    <main className="main">
      <h3>Hover the box</h3>
      <div className={s['present-wrapper']}>
        <div className={s.box}>
          <div className={s['box-wrapper']}>
            <img className={s.img} src="https://via.placeholder.com/150" />
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
