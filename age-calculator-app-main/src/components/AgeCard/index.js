import './AgeCard.css';
import DateTextField from '../DateTextField'
import AgeResult from '../AgeResult'
import { useState } from 'react';

export const AgeCard = () => {

    const [date, setDate] = useState({});
    const onClick = (date) =>
        setDate(calculateAge(date));


    return (
        <div className='card'>
            <DateTextField onClick={onClick} />
            <AgeResult date={date} />
        </div>
    );
}

function calculateAge(birthday) {
    var now = new Date();
    var birth = new Date(birthday);

    var ageYear = now.getFullYear() - birth.getFullYear();
    var ageMonths = now.getMonth() - (birth.getMonth() - 1);
    var ageDays = now.getDate() - birth.getDate();


    if (ageMonths < 0 || (ageMonths === 0 && now.getDate() < birth.getDate())) {
        ageYear--;
        ageMonths += 12;
    }

    if (ageDays < 0) {
        var ultimoDiaMesAnterior = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        ageMonths--;
        ageDays += ultimoDiaMesAnterior;
    }

    return { years: ageYear, months: ageMonths, days: ageDays };
}

export default AgeCard;