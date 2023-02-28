const APIKey = '0dc3d48ba9eba53b4814f5ec127f98bf';
const baseURL = 'https://api.openweathermap.org/data/2.5';




const urls = {
    weather:'/weather?units=metric&lang=ru&q=',
    hourly_forecast:'/forecast/hourly?',
    daily_forecast:'/forecast/daily?',
    getIcon: 'http://openweathermap.org/img/w/'

}



export {APIKey, baseURL, urls}