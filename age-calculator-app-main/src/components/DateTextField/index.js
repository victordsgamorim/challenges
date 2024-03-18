import { useState } from 'react';
import Button from "../Button";
import TextField from "../TextField";
import './DateTextField.css';

const DateTextField = (props) => {

    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const error = "This field is required!";

    const [er, setError] = useState({ day: false, month: false, year: false });

    const onClick = () => {
        if (day.length <= 0 || month.length <= 0 || year.length <= 3) {
            setError({
                day: day.length <= 0,
                month: month.length <= 0,
                year: year.length <= 3
            });
            return;
        }
        setError({
            day: false,
            month: false,
            year: false
        });


        props.onClick(new Date(year, month, day));
    }




    return (
        <form className='date-form'>
            <div>
                <TextField label="day" placeholder="dd" maxLength={2} startDate={1} endDate={31} value={day} onChange={setDay} error={er.day ? error : null} />
                <TextField label="month" placeholder="mm" maxLength={2} startDate={1} endDate={12} value={month} onChange={setMonth} error={er.month ? error : null} />
                <TextField label="year" placeholder="yyyy" maxLength={4} startDate={1} endDate={new Date().getFullYear()} value={year} onChange={setYear} error={er.year ? error : null} />
            </div>
            <Button onClick={onClick} />
        </form>
    );
}

export default DateTextField;