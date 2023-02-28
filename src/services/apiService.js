import {axiosService} from "./axiosService";
import {APIKey, urls} from "../configs";
import axios from "axios";

const apiService = {
    getCurrentWeather:(city)=>axiosService.get(`${urls.weather}${city}&appid=${APIKey}`),

}

export {apiService}