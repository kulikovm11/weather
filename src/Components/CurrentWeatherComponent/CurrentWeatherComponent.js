import { useEffect, useRef, useState } from "react";
import { apiService } from "../../services";
import { CurrentWeatherCard } from "../CurrentWeatherCard/CurrentWeatherCard";
import {ForecastCard} from "../ForecastCard/ForecastCard";

const CurrentWeatherComponent = () => {
    const [data, setData] = useState(null);
    const [forecast, setForecast] =useState(null)
    const [city, setCity] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const selectCity = useRef();

    useEffect(() => {
        if (city) {
            setIsLoading(true);
            apiService
                .getCurrentWeather(city)
                .then(({ data }) => {
                    setData(data);
                    setIsLoading(false);
                    setError(null);
                })


                .catch((error) => {
                    console.log(error);
                    setIsLoading(false);
                    setError(error.message);
                });
        }
    }, [city]);

    useEffect(()=>{
        if(city) {
            apiService
                .get5DayForecast(city)
                .then(({data}) => {
                    setForecast(data.list);
                    setIsLoading(false);
                    setError(null);
                })
                .catch((error) => {
                    console.log(error);
                    setIsLoading(false);
                    setError(error.message);
                });
        }
    },[city])

    const onSubmit = (e) => {
        e.preventDefault();
        const city = selectCity.current.value;
        if (!city) {
            setError("Введите название города");
            return;
        }
        setCity(city);
    };

    return (
        <div style={{ display:'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center' }}>
            <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="город" ref={selectCity} />
                <button disabled={isLoading}>Выбрать</button>
            </form>
            </div>
            {error && <div>{error}</div>}
            {isLoading && <div>Загрузка...</div>}
            {data && data.weather.map((i) => (
                <CurrentWeatherCard
                    key={Math.random()}
                    weatherArr={i}
                    data={data}
                />
            ))}
            <div className="Forecast">
                {forecast && forecast.map(resp=><ForecastCard key={Math.random()} forecast={resp}/>)}

            </div>
        </div>
    );
};

export { CurrentWeatherComponent };
