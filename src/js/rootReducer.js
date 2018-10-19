import { combineReducers } from 'redux';
import citySelectionReducer from './Components/CitySelection/reducer'

const rootReducer = combineReducers({
    city: citySelectionReducer
});

export default rootReducer;
