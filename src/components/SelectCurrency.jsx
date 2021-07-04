import React, { useContext } from 'react';
import { CustomContext } from './Context';

function SelectCurrency(props) {
  const { currList, currSelected } = useContext(CustomContext);
  return (
    <select value={currSelected} className="cur" onChange={Handle}>
      {currList.map((item) => (
        <option value={item.name}>{item.name}</option>
      ))}
    </select>
  );

  function Handle(event) {
    props.GetData(event.target.value);
  }
}

export default SelectCurrency;
