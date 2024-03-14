import './TextField.css';

const TextField = (props) => {
    return (
        <div className='text-field'>
            <label for='name'>{props.label}</label>
            <input id='name' type='text'/>
        </div>
    );
}

export default TextField;