import './AgeResult.css';
import TextResult from '../TextResult'

const AgeResult = (props) => {
    return (
        <section className='age-result'>
            <TextResult number={props.date.years} dateName="year" />
            <TextResult number={props.date.months} dateName="month" />
            <TextResult number={props.date.days} dateName="day" />
        </section>
    );
};

export default AgeResult;