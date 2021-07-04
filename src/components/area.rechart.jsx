import React, { useContext, useState, useEffect } from 'react';
import {
  AreaChart,
  Area,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { CustomContext } from './Context';

function Chart(props) {
  const { data } = props;
  const { usd, eur, rub, currSelected } = useContext(CustomContext);

  const def = [];
  usd.map((item) => {
    def.push({
      date: item.Date.substr(0, 10),
      cur: item.Cur_OfficialRate,
    });
  });
  return (
    <AreaChart
      width={600}
      height={300}
      data={data || def}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#c5cae9" stopOpacity={1} />
          <stop offset="95%" stopColor="#c5cae9" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="date" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />

      <Area
        type="monotone"
        dataKey="cur"
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
    </AreaChart>
  );
}

export default Chart;
