import "./Characters.css";

const Characters = (props) => {
    return (
        <div className="characters">
            <div className="header" style={{backgroundColor: props.colorCard}} >
                <img src= {props.image} alt="Imagem do personagem" />
            </div>
            <div className="footer">
                <h4>{props.name}</h4>
                <h5>{props.hability}</h5>
            </div>
        </div>
    )
}

export default Characters;