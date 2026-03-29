import Card from "./Card";
import Header from "./Header";
import Gauge from "./Gauge";
import Graph from "./Graph";
import Alerts from "./Alerts";
import "./App.css";
function App() {
  const data =[
    { time: "1", voltage: 12,current: 2,temperature: 30},
     { time: "2", voltage: 12.2,current: 2.1,temperature: 32},
      { time: "3", voltage: 12.4,current: 2.2,temperature: 35}
  ];
  return (
    <div /*style={{background:"#0F172A",height:"200vh",color:"white"}}*/>
      <h1>Battery Dashboard</h1>

      <div className ="row" /*style={{display:"flex",gap:"20px"}}*/>
        <Card title="Voltage" value="12.6" uint="V"/>
       <Card title="Current" value="2.3" uint="A"/>
       <Card title="Temperature" value="35" uint="°C"/>
      </div>

      <div className="center-row">
        <Gauge percentage={85}/>
        </div>
        <div className="center-row">
        <Alerts temperature={55} voltage={9}/>
      </div>

      <Graph data={data}/>
    </div>
  );
}

export default App;


