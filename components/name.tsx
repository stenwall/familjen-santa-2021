import React from 'react';
import s from '../styles/Name.module.scss';

interface Props {
  name: string
}

const Name = (props: Props) => {
  return (
    <>
      <h2 className={s.name}>
        {props.name}
      </h2>
    </>
  );
};

export default Name;
