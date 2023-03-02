import {urls} from "../../configs";
import css from './CardStyle.module.css'

const CurrentWeatherCard = ({weatherArr, data}) => {

    const {description, icon} = weatherArr;
    const {main, wind, clouds, name, sys, dt} = data;


    const date1 = new Date(dt * 1000);

    const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const dayNames = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const formattedDate = `${dayNames[date1.getDay()]}, ${date1.getDate()} ${monthNames[date1.getMonth()]} ${date1.getFullYear()} ${date1.getHours()}:${date1.getMinutes().toString().padStart(2, '0')}`;




    return (
        <div className={css.Card}>


            <div className='Name'><h2>{name}</h2></div>
            <div className='date'>
                <p>Сейчас: {formattedDate}</p>
            </div>
            <div className='state'>{description} <img src={`${urls.getIcon}${icon}.png`} alt="icon"/></div>
            <div className='temp'>
                <p>{Math.round(main.temp)} ℃</p>
                <p>Чувствуется как {Math.round(main.feels_like)} ℃</p>
            </div>
            <div className='wind'>
                <p>Ветер {wind.speed} м/с</p>
            </div>
            <div className='clouds'><p>{clouds.all}% облачности.</p></div>
            <div className='wind'></div>





        </div>
    );
};

export {CurrentWeatherCard};


