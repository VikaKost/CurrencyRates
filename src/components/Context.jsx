import React, { createContext, useState } from 'react';

export const CustomContext = createContext();

export const Context = (props) => {
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [usd, setUsd] = useState([]);
  const [eur, setEur] = useState([]);
  const [rub, setRub] = useState([]);
  const [curr, setCurrency] = useState('145');
  const [currList, setCurrList] = useState([
    { name: 'USD', id: 145 },
    { name: 'EUR', id: 292 },
    { name: 'RUB', id: 298 },
  ]);

  const exUsd = (data) => {
    setUsd(data);
  };

  const exEur = (data) => {
    setEur(data);
  };

  const exRub = (data) => {
    setRub(data);
  };

  const exFrom = (data) => {
    setFrom(data);
  };

  const exTo = (data) => {
    setTo(data);
  };

  const GetData = (f, t) => {
    fetch(
      `https://www.nbrb.by/API/ExRates/Rates/Dynamics/145?startDate=${
        from || f
      }&endDate=${to || t}`
    )
      .then((response) => response.json())
      .then((data) => {
        exUsd(data);
      });

    fetch(
      `https://www.nbrb.by/API/ExRates/Rates/Dynamics/292?startDate=${
        from || f
      }&endDate=${to || t}`
    )
      .then((response) => response.json())
      .then((data) => {
        exEur(data);
      });
    fetch(
      `https://www.nbrb.by/API/ExRates/Rates/Dynamics/298?startDate=${
        from || f
      }&endDate=${to || t}`
    )
      .then((response) => response.json())
      .then((data) => {
        exRub(data);
      });
  };

  const value = {
    from,
    to,
    exFrom,
    exTo,
    usd,
    eur,
    rub,
    exUsd,
    exEur,
    exRub,
    GetData,
    currList,
  };
  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};
