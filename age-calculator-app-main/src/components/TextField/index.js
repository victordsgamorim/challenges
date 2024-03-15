import './TextField.css';

const TextField = (props) => {
    return (
        <div className='text-field'>
            <label for='name'>{props.label}</label>
            <input id='name' type='text' placeholder={props.placeholder}
                maxLength={props.maxLength}
                value={props.value}
                onChange={(e) => {
                    const value = e.target.value;
                    // const isNumber = props.pattern.test(value);
                    // if (isNumber) props.onChange(value);
                    props.onChange(value)
                }} />
        </div>
    );
}

export default TextField;