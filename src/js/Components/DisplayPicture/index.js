import { connect } from 'react-redux';
import DisplayPicture from './DisplayPicture';

function mapStateToProps(store) {
    return {
        category: store.weather.category,
        description: store.weather.description,
        toggle: store.weather.toggle,
        temperature: store.weather.temperature,
    }
}

export default connect(mapStateToProps)(DisplayPicture);