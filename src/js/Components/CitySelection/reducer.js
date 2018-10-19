const defaultState = {
    cityName: '',
    cityData: '',
    temperature: '',
    humidity: '',
    highTemp: '',
    lowTemp: '',
    sunrise: '',
    sunset: '',
    windSpeed: ''
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
        case 'GET_WEATHER_FULFILLED': {
            return {
                ...state,
                cityData: payload,
                temperature: payload.main.temp,
                humidity: payload.main.humidity,
                highTemp: payload.main.temp_max,
                lowTemp: payload.main.temp_min,
                sunrise: payload.sys.sunrise,
                sunset: payload.sys.sunset,
                windSpeed: payload.wind.speed
            }
        }
        default: {
            return state
        }
    }
}