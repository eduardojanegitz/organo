import "./Dropdown.css";

const Dropdown = (props) => {
    return (
        <div className="dropdown">
            <label>{props.label}</label>
            <select required={props.required} value={props.valueInput} onChange={event => props.valueInputMod(event.target.value)}>
                {props.itens.map(item => {
                    <option value=""></option>
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default Dropdown;