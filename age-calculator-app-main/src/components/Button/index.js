import './Button.css';

const Button = (props) => {
    return (
        <section className='button'>
            <hr />
            <div className='button' onClick={(event) => {
                props.onClick(event)
            }}>
                <span><img src='assets/images/icon-arrow.svg' alt='Button icon' /></span>
            </div>
        </section>
    );
}

export default Button;