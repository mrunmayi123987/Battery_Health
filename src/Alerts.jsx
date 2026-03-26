function Alerts({temperature,voltage}){
    return(
        <div className="card" style={{width:"300px"}}>
            <h3>Alerts</h3>
            {temperature>50&&(
                <p style ={{color:"#EF4444"}}>
                    High Temperature Warning!
                </p>
            )}
            {voltage<10&&(
                <p style ={{color:"#FACC15"}}>
                    Low Voltage Warning!
                </p>
            )}
             {temperature<=50&& voltage>=10 &&(
                <p style ={{color:"#22C55E"}}>
                   System normal
                </p>
            )}

        </div>
    )
}
export default Alerts;