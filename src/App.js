import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import { useState } from "react";
import Houses from "./components/Houses";

const App = () => {

  const [characters, setCharacters] = useState([]);

  const addNewCharacter = (character) => {
    console.log(character);
    setCharacters([...characters, character]);
  }

  const houses = [
    {
      name: 'Lufa-Lufa',
      backgroundImage: "url('./images/lufa-lufa.png')",
      colorCard: '#000'
    },
    {
      name: 'Grifinória',
      backgroundImage: "url('./images/gryffindor.png')",
      colorCard: '#57C178'
    },
    {
      name: 'Corvinal',
      backgroundImage: "url('./images/ravenclaw.png')",
      colorCard: '#57C278'
    },
    {
      name: 'Sonserina',
      backgroundImage: "url('./images/slytherin.png')",
      colorCard: '#57C278'
    }
  ]


  return (
    <div className="App">
      <Banner />
      <Formulario
        houses={houses.map(house => house.name)}
        characterReg={character => addNewCharacter(character)}
      />

      {houses.map(house => 
        <Houses
          key={house.name}
          name={house.name}
          backgroundImage={house.backgroundImage}
          colorCard={house.colorCard}
          characters={characters.filter(character => character.houses === houses.name)}
        />
      )}

    </div>
  );
}

export default App;
