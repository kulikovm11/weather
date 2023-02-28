import {urls} from "../../configs";
import css from './CardStyle.module.css'

const CurrentWeatherCard = ({weatherArr, data}) => {

    const {description, icon} = weatherArr;
    const {main, wind, clouds, name, sys} = data;




    return (
        <div className={css.Card}>

            <div className='Name'><h2>{name}</h2></div>
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


// "coord": {
//     "lon": 31.8869,
//         "lat": 51.048
// },
// "weather": [
//     {
//         "id": 800,
//         "main": "Clear",
//         "description": "ясно",
//         "icon": "01n"
//     }
// ],
//     "base": "stations",
//     "main": {
//     "temp": -0.56,
//         "feels_like": -5.84,
//         "temp_min": -0.56,
//         "temp_max": -0.56,
//         "pressure": 1024,
//         "humidity": 65,
//         "sea_level": 1024,
//         "grnd_level": 1008
// },
// "visibility": 10000,
//     "wind": {
//     "speed": 5.4,
//         "deg": 275,
//         "gust": 12.1
// },
// "clouds": {
//     "all": 4
// },
// "dt": 1677607719,
//     "sys": {
//     "country": "UA",
//         "sunrise": 1677559229,
//         "sunset": 1677598202
// },
// "timezone": 7200,
//     "id": 699942,
//     "name": "Нежин",
//     "cod": 200
// }