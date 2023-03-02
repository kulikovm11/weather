import {axiosService} from "./axiosService";
import {APIKey, urls} from "../configs";


const apiService = {
    getCurrentWeather:(city)=>axiosService.get(`${urls.weather}${city}&appid=${APIKey}`),
    get5DayForecast:(city)=>axiosService.get(`${urls.getForecast}${city}&appid=${APIKey}`)

}

export {apiService}