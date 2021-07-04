import React, { useContext, useState, useEffect, useLayoutEffect } from 'react';
import SelectCurrency from './SelectCurrency';
import Chart from './area.rechart';
import { CustomContext } from './Context';

function ChartRates() {
  const { usd, eur, rub } = useContext(CustomContext);
  let dataTemp = usd;
  const [data, setData] = useState();

  function GetDataCurr(curr) {
    dataTemp = [];
    if (curr == 'USD') {
      usd.map((item) => {
        dataTemp.push({
          date: item.Date.substr(0, 10),
          cur: item.Cur_OfficialRate,
        });
      });
    }

    if (curr == 'EUR') {
      eur.map((item) => {
        dataTemp.push({
          date: item.Date.substr(0, 10),
          cur: item.Cur_OfficialRate,
        });
      });
    }

    if (curr == 'RUB') {
      rub.map((item) => {
        dataTemp.push({
          date: item.Date.substr(0, 10),
          cur: item.Cur_OfficialRate,
        });
      });
    }

    return setData(dataTemp);
  }

  return (
    <div className="chart">
      <SelectCurrency GetData={GetDataCurr} />
      <Chart data={data} GetData={GetDataCurr} />
    </div>
  );
}

export default ChartRates;
