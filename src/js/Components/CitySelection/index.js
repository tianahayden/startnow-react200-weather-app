import { connect } from 'react-redux';
import CitySelection from './CitySelection';

function mapStateToProps(store) {
    return {
        city: store.city.cityName
    }
  }


export default connect(mapStateToProps)(CitySelection);
