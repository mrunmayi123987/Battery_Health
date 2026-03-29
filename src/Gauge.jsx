function Gauge({percentage}){

    let colorClass = "";

  if (percentage > 70) {
    colorClass = "battery-high";
  } else if (percentage > 30) {
    colorClass = "battery-medium";
  } else {
    colorClass = "battery-low";
  }

    return(
       /* <div className="Card" style={{textAlign: "center",width:"250px"}}>
            <h3>Battery Health</h3>
            <div style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                border: "10px solid #22C55E",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto"
            }}>
                <h2>{percentage}%</h2>
            </div>
        </div>*/
        /*<div className ="Card Battery">
             <div className="title">Battery Health</div>
             <div className="Gauge-circle">
        <h2>{percentage}%</h2>
      </div>

     
        </div>*/
         <div className={`Card ${colorClass}`}>
      <h3>Battery Health</h3>

      
       <div className="Gauge-circle">
        <div className="Gauge-text">{percentage}%</div>
      </div>
    </div>

    );
}
export default Gauge;