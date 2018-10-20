import axios from 'axios';

export const updateCity = (value) => {
    return {
        type: 'UPDATE_CITY',
        payload: value
    }
};

export const setCitySelection = (value) => {
    return {
        type: 'SET_CITY_SELECTION',
        payload: value
    }
};

export const getWeather = (value) => {
    return {
        type: 'GET_WEATHER',
        payload: axios.get('/api?value=' + value)
            .then(({ data }) => {
                console.log(data)
                return data
            }
            )
    }
};

export const updateSearchHistory = (toggle, name) => {
    return {
        type: 'UPDATE_SEARCH_HISTORY',
        payload: {
            toggle: toggle,
            name: name
        }
    }
};
