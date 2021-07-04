import { v4 as uuidv4 } from 'uuid';

function TableItem(props) {
  const { name, data } = props;
  let max = 0;
  let min = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].Cur_OfficialRate > data[max].Cur_OfficialRate) {
      max = i;
    }
    if (data[i].Cur_OfficialRate < data[min].Cur_OfficialRate) {
      min = i;
    }
  }

  return (
    <tr>
      <td className="curName">{name}</td>
      {data.map(
        (item, i) =>
          (i == max && (
            <td key={uuidv4()} className="max">
              {item.Cur_OfficialRate}
            </td>
          )) ||
          (i == min && (
            <td key={uuidv4()} className="min">
              {item.Cur_OfficialRate}
            </td>
          )) || <td key={uuidv4()}>{item.Cur_OfficialRate}</td>
      )}
    </tr>
  );
}

export default TableItem;
