import React from 'react';
import s from '../styles/Snow.module.scss';

interface Props {}

const Snow = (props: Props) => {
  return (
    <>
      <div className={[s.snow, s.layer1, s.a].join(' ')}></div>
      <div className={[s.snow, s.layer1].join(' ')}></div>
      <div className={[s.snow, s.layer2, s.a].join(' ')}></div>
      <div className={[s.snow, s.layer2].join(' ')}></div>
      <div className={[s.snow, s.layer3, s.a].join(' ')}></div>
      <div className={[s.snow, s.layer3].join(' ')}></div>
    </>
  );
};

export default Snow;
