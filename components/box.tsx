import { MouseEventHandler } from 'react';
import s from '../styles/Box.module.scss';

interface Props {
  onClick: MouseEventHandler,
  open: Boolean,
  imgUrl: string
}

const Box = (props: Props) => {

  return (
    <div className={s['present-wrapper']}>
      <div className={s.box}>
        <div
          className={
            props.open ? [s.open, s['box-wrapper']].join(' ') : s['box-wrapper']
          }
          onClick={props.onClick}
        >
          <div className={s.glow} />
          <img
            className={[s.img, s.star].join(' ')}
            src={props.imgUrl}
          />
          <div className={s['box-body']}>
            <div className={s['box-lid']}>
              <div className={s['box-bow']}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
