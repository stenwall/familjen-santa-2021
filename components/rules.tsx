import React, { MouseEventHandler } from 'react';
import s from '../styles/Rules.module.scss';

interface Props {
  onClose: MouseEventHandler;
}

const Rules = (props: Props) => {
  return (
    <div className={s.card}>
      <div className={s['card-wrapper']}>
        <div className={s.rules}>
          {/* Regler */}
          <ul>
            <li>
              Julklappen ska kosta 400kr (redovisa till Familjen som ett vanligt
              kvitto)
            </li>
            <li>INGEN får veta vem du ska köpa till</li>
            <li>
              Skriv namnet på personen julklappen är till på, men ingen
              avsändare
            </li>
            <li>
              Rimma gärna (men inget tvång)
            </li>
            <li>Ta med paketet till julfesten och lägg under granen!</li>
          </ul>
          <button className={s.close} onClick={props.onClose}>
            yes, jag fattar! stäng nu.
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rules;
