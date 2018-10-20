const defaultState = {
    cityName: '',
    citySelected: '',
    country: '',
    temperature: '',
    humidity: '',
    highTemp: '',
    lowTemp: '',
    sunrise: '',
    sunset: '',
    windSpeed: '',
    toggle: false,
    searchHistory: [],
    category: '',
    description: ''
};

export default function CitySelectionReducer(state = defaultState, action) {
    const { payload, type } = action;

    switch (type) {
        case 'UPDATE_CITY': {
            return {
                ...state,
                cityName: payload
            }
        }
        case 'SET_CITY_SELECTION': {
            return {
                ...state,
                citySelected: payload
            }
        }
        case 'UPDATE_SEARCH_HISTORY': {
            var date = new Date()
            var month = date.getMonth()
            var day = date.getDate()
            var year = date.getFullYear()
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();
            var formattedDate = month + '/' + day + '/' + year;
            var formattedTime = hours + ':' + minutes + ':' + seconds;
            var historyItem = {
                name: payload.name,
                date: formattedDate, 
                time: formattedTime
            }
            return {
                ...state,
                toggle: true,
                searchHistory: [
                    ...state.searchHistory,
                    historyItem
                ]
            }
        }
        case 'GET_WEATHER_FULFILLED': {
            var sunrise = new Date(payload.sys.sunrise * 1000)
            var sunriseHours = sunrise.getHours();
            var sunriseMinutes = '0' + sunrise.getMinutes();
            var sunriseSeconds = '0' + sunrise.getSeconds();
            var sunriseFormatted = sunriseHours + ':' + sunriseMinutes.substr(-2) + ':' + sunriseSeconds.substr(-2); 
            var sunset = new Date(payload.sys.sunset * 1000)
            var sunsetHours = sunset.getHours();
            var sunsetMinutes = '0' + sunset.getMinutes();
            var sunsetSeconds = '0' + sunset.getSeconds();
            var sunsetFormatted = sunsetHours + ':' + sunsetMinutes.substr(-2) + ':' + sunsetSeconds.substr(-2); 

            return {
                ...state,
                country: payload.sys.country,
                temperature: payload.main.temp,
                humidity: payload.main.humidity,
                highTemp: payload.main.temp_max,
                lowTemp: payload.main.temp_min,
                sunrise: sunriseFormatted,
                sunset: sunsetFormatted,
                windSpeed: payload.wind.speed,
                category: payload.weather[0].main,
                description: payload.weather[0].description
            }
        }
        default: {
            return state
        }
    }
}