function Card({title,value,uint}){
     return(
       /* <div style ={{
            background: "#FEF3C7",
            padding: "20px",
            borderRadius: "10px",
            width: "200px"
        }}>
            <h3>{title}</h3>
            <h1>{value} {uint}</h1>
        </div>*/
       <div className={`Card ${title.toLowerCase()}`}>
            <div className="title">{title}</div>
      
      <div className="value">
        {value} <span>{uint}</span>
      </div>
        </div>
     );
}

export default Card;