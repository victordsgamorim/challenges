import './TextResult.css';

const TextResult = (props) => {

    const dateName = props.number != null && props.number > 1 ? `${props.dateName}s` : props.dateName;

    return (
        <p className='text'><strong>{props.number ?? "--"}</strong> {dateName}</p>
    );
}

export default TextResult;