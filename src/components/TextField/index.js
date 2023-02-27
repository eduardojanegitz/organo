import "./TextField.css";

const TextField = (props) => {
    const typedInput = (event) => {
        props.valueInputMod(event.target.value);
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input
                value={props.valueInput}
                onChange={typedInput}
                required={props.required}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default TextField;