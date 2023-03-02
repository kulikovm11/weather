import {urls} from "../../configs";

import css from './ForecastCardStyle.module.css'

const ForecastCard = ({forecast}) => {

    const {main,weather, clouds, wind,sys, dt} = forecast;

    const date = new Date(dt * 1000);

    const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const dayNames = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const formattedDate = `${dayNames[date.getDay()]}, ${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()} ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;



    return (
        <div className={css.Card}>
            <p>{formattedDate}</p>
            <p>{Math.round(main.temp)}℃</p>
            {weather.map(i=>(<p key={Math.random()}>{i.description}</p>, <img key={Math.random()} src={`${urls.getIcon}${i.icon}.png`} alt=""/>))}
            <p>{clouds.all}% облачности</p>
            <div className='wind'>
                <p>Ветер {wind.speed} м/с</p>
            </div>

            <p>{sys.pod === 'd'? 'день':'ночь'}</p>
        </div>
    );
};

export {ForecastCard};