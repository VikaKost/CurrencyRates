import React, { useContext } from 'react';
import './TableStyle.css';
import { v4 as uuidv4 } from 'uuid';
import TableItem from './TableItem';

function Table(props) {
  const { search, usd, rub, eur } = props;
  return (
    <table className="ratesTable">
      <thead>
        <tr>
          <th></th>
          {usd.map((item) => (
            <th key={uuidv4()}>
              {new Date(item.Date).getDate()}/
              {new Date(item.Date).getMonth() + 1}/
              {new Date(item.Date).getFullYear()}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {'usd'.includes(search) && <TableItem name="USD" data={usd} />}
        {'eur'.includes(search) && <TableItem name="EUR" data={eur} />}
        {'rub'.includes(search) && <TableItem name="RUB" data={rub} />}
      </tbody>
    </table>
  );
}

export default Table;
