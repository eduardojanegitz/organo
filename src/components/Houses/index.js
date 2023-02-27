import "./Houses.css";
import Characters from "../Characters";

const Houses = (props) => {
    return (
        // (props.characters.lenght > 0) ?
        <section className="houses" style={{ backgroundImage: props.backgroundImage }}>
            <h3 style={{ borderColor: props.colorCard }}>{props.name}</h3>
            <div className="characters-houses">
                {props.characters.map(character =>
                    <Characters
                        backgroundImage={props.backgroundImage}
                        colorCard={props.colorCard}
                        key={character.name}
                        name={character.name}
                        image={character.image}
                        hability={character.hability}
                    />

                )}
            </div>
        </section>
        // : ""
    )
}

export default Houses;