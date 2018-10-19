import axios from 'axios';

export const updateCity = (value) => {
    return {
        type: 'UPDATE_CITY',
        payload: value
    }
};


// on click needs to go to the api and search the city name of the current cityName in the store
export const getWeather = (value) => {
    return {
        type: 'GET_WEATHER',
        payload: axios.get('/api?value=' + value)
            .then( (response) => {
                console.log(response.data);
                return response.data;
            })
    }
};