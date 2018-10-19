import { combineReducers } from 'redux';
import citySelectionReducer from './Components/CitySelection/reducer'

const rootReducer = combineReducers({
    weather: citySelectionReducer
});

export default rootReducer;
