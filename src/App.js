import ChartRates from "./components/ChartRates";
import TableRates from "./components/TableRates";
import {Context} from './components/Context';



function App() {
  return (
    <Context>
    <div className="App">
      <h1>Curency rates</h1>
      <TableRates />
      <ChartRates />
    </div>
    </Context>
  );
}

export default App;
