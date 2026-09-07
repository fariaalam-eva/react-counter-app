
function Card(props){
    return(
        <div className="card">
            <img className="cardImg" src={props.titleImage} alt={props.titleText}/>
            <h2 className="cardTitle">{props.titleText}</h2>
            <p className="cardDesc">{props.titleDesc}</p>
            <p className="cardPrice">{props.titlePrice}</p>
              <p className="cardRating">{props.titleRating}</p>
              <button className="cardButton">{props.titleButton}</button>
        </div>
    )
}
  export default Card;
