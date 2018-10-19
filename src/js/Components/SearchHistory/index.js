import { connect } from 'react-redux';
import SearchHistory from './SearchHistory';

function mapStateToProps(store) {
    return {
        citySelected: store.weather.citySelected,
        toggle: store.weather.toggle,
        searchHistory: store.weather.searchHistory,
    }
}

export default connect(mapStateToProps)(SearchHistory);
