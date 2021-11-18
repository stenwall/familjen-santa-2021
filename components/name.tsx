import React from 'react';
import s from '../styles/Name.module.scss';

interface Props {}

const Name = (props: Props) => {
  return (
    <>
      <h2 className={s.name}>Namn Efternamn</h2>
    </>
  );
};

export default Name;
