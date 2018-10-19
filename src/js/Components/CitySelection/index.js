import { connect } from 'react-redux';
import CitySelection from './CitySelection';

function mapStateToProps(store) {
    return {
        cityName: store.weather.cityName,
    }
  }


export default connect(mapStateToProps)(CitySelection);
