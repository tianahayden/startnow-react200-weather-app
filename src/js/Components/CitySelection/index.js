import { connect } from 'react-redux';
import CitySelection from './CitySelection';

function mapStateToProps(store) {
    return {
        cityName: store.weather.cityName,
        toggle: store.weather.toggle,
        searchHistory: store.weather.searchHistory
    }
  }


export default connect(mapStateToProps)(CitySelection);
