import { connect } from 'react-redux';
import DisplayResults from './DisplayResults';

function mapStateToProps(store) {
    return {
        citySelected: store.weather.citySelected,
        country: store.weather.country,
        temperature: store.weather.temperature,
        humidity: store.weather.humidity,
        highTemp: store.weather.highTemp,
        lowTemp: store.weather.lowTemp,
        sunrise: store.weather.sunrise,
        sunset: store.weather.sunset,
        windSpeed: store.weather.windSpeed,
        toggle: store.weather.toggle,
    }
}

export default connect(mapStateToProps)(DisplayResults);
