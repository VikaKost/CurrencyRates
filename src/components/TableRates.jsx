import React, { useEffect, useState, useContext } from 'react';
import { CustomContext } from './Context';
import Table from './Table';
import TablePeriod from './TablePeriod';

function TransformDate(date) {
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  let d = date.getDate();
  if (m < 10) m = `0${m}`;
  if (d < 10) d = `0${d}`;
  let newDate = `${y}-${m}-${d}`;
  return newDate;
}

function TableRates() {
  const { from, to, exFrom, exTo, usd, eur, rub, GetData } =
    useContext(CustomContext);

  const dayMilliseconds = 24 * 60 * 60 * 1000 * 6;
  const curTo = new Date();
  curTo.setTime(curTo.getTime());
  let curFrom = new Date();
  curFrom.setTime(curFrom.getTime() - dayMilliseconds);

  const [search, setSearch] = useState('');
  useEffect(() => {
    exFrom(TransformDate(curFrom));
    exTo(TransformDate(curTo));
    GetData(TransformDate(curFrom), TransformDate(curTo));
  }, []);

  return (
    <div>
      <input
        className="searchCurr"
        placeholder="Search..."
        type="search"
        name="search"
        value={search || ''}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="tableWr">
        <Table usd={usd} eur={eur} rub={rub} search={search} />
      </div>
      <TablePeriod from={from} to={to} />
    </div>
  );
}

export default TableRates;
