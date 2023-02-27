import "./Form.css";
import TextField from "../TextField";
import Dropdown from "../Dropdown";
import Button from "../Button";
import { useState } from "react";


const Formulario = (props) => {

    const [name, setName] = useState('');
    const [hability, setHability] = useState('');
    const [image, setImage] = useState('');
    const [house, setHouse] = useState('');

    const saveForm = (event) => {
        event.preventDefault();
        props.characterReg({
            name: name,
            hability: hability,
            image: image,
            house: house   
        })
        setName('');
        setHability('');
        setImage('');
        setHouse('');
    }

    return (
        <section className="form-container">
            <form className="form" onSubmit={saveForm}>
                <h2>Preencha os dados para criar o card do personagem</h2>
                <TextField
                    required={true}
                    label="Nome"
                    placeholder="Digite o nome do personagem"
                    valueInput={name}
                    valueInputMod={valueInput => setName(valueInput)}
                />
                <TextField
                    required={true}
                    label="Habilidade"
                    placeholder="Digite a habilidade do personagem"
                    valueInput={hability}
                    valueInputMod={valueInput => setHability(valueInput)}
                />
                <TextField
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    valueInput={image}
                    valueInputMod={valueInput => setImage(valueInput)}
                />
                <Dropdown
                    required={true}
                    label="Escolha a casa"
                    itens={props.houses}
                    valueInput={house}
                    valueInputMod={valueInput => setHouse(valueInput)}
                />
                <Button >
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Formulario;