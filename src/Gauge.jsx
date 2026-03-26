function Gauge({percentage}){
    return(
        <div className="Card" style={{textAlign: "center",width:"250px"}}>
            <h3>Battery Health</h3>
            <div style={{
                width: "150px",
                height: "150px",
                borderRadius: "10px solid #22C55E",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto"
            }}>
                <h2>{percentage}%</h2>
            </div>
        </div>
    );
}
export default Gauge;