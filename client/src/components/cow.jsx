function Cow(props) {

    return(
        <div className="Cow">
            <div>{props.data.id}</div>
            <div className="name"><h4>{props.data.cowName}</h4></div>
            <div className="favSnack">{props.data.favoriteSnack}</div>
            <div className="milk"><h4>MELK ml/s</h4>&nbsp;{props.data.milkProduction}</div>
            <button onClick={()=> props.delete(props.data.id)}>Free&nbsp;{props.data.cowName}</button>
            <input type="text"/>
            <button>Update</button>
        </div>
    );
};
  
  
export default Cow;