function Header(){
    return(
        <div style={{
            background: "#1E293B",
            padding: "15px 20px",
            borderRadius: "10px",
            marginBottom: "20px",
            display :"flex",
            justifyContent: "space-between"
        }}>
            <h2>Battery Health Monitoring System</h2>
           <span style={{color:"#22C55E"}}>. Connected</span> 
        </div>
    );
}

export default Header;