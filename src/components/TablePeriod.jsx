import React, { useContext } from 'react';
import { CustomContext } from './Context';

function TablePeriod() {
  const { from, to, exFrom, exTo, GetData } = useContext(CustomContext);
  return (
    <div className="filter">
      <input
        className="period"
        type="date"
        name="from"
        value={from || ''}
        onChange={(e) => exFrom(e.target.value)}
      ></input>
      <input
        className="period"
        type="date"
        name="to"
        value={to || ''}
        onChange={(e) => exTo(e.target.value)}
      ></input>
      <input type="button" className="see" value="update" onClick={GetData} />
    </div>
  );
}

export default TablePeriod;
