import './TextField.css';

const TextField = (props) => {
    const label = props.label;

    const onChange = (e) => {
        let inputValue = e.target.value;
        inputValue = inputValue.replace(/\D/g, '');
        const intValue = parseInt(inputValue);
        intValue >= props.startDate && intValue <= props.endDate ? props.onChange(intValue.toString()) : props.onChange('');
    };

    const isError = props.error != null;
    const errorColor = "hsl(0, 100%, 67%)";
    const labelErrorStyle = { color: isError ? errorColor : "hsl(0, 1%, 44%)" }
    const inputErrorStyle = { borderColor: isError ? errorColor : "hsl(0, 0%, 86%)" }
    const spanErrorMessage = { display: isError ? "block" : "none" }


    return (
        <div className='text-field'>
            <label htmlFor={label} style={labelErrorStyle}>{label}</label>
            <input
                id={label} 
                type='text'
                placeholder={props.placeholder}
                maxLength={props.maxLength}
                style={inputErrorStyle}
                value={props.value}
                onChange={onChange}
            />
            <span style={spanErrorMessage}>{props.error}</span>
        </div>
    );
}

export default TextField;