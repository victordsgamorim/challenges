import { useState } from 'react';
import Button from "../Button";
import TextField from "../TextField";
import './DateTextField.css';

const DateTextField = (props) => {

    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const onClick = () => {
        props.onClick(new Date(year, month, day));
    }

    return (
        <form className='date-form'>
            <div>
                <TextField label="day" placeholder="dd" maxLength={2} pattern="^(0?[1-9]|[12][0-9]|3[01])$" value={day} onChange={setDay} />
                <TextField label="month" placeholder="mm" maxLength={2} pattern="^(0?[1-9]|1[0-2])$" value={month} onChange={setMonth} />
                <TextField label="year" placeholder="yyyy" maxLength={4} pattern="^(0?[1-9]|[12][0-9]|3[01])$" value={year} onChange={setYear} />
            </div>
            <Button onClick={onClick} />
        </form>
    );
}

export default DateTextField;