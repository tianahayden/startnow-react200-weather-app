import React from 'react';
import { updateCity, getWeather, setCitySelection, updateSearchHistory } from './actions';


export default class CitySelection extends React.Component {
    constructor(props) {
        super(props);
        this.handleCitySearch = this.handleCitySearch.bind(this);
        this.handleSearchButton = this.handleSearchButton.bind(this);
        this.handleDefaultCities = this.handleDefaultCities.bind(this);
    }

    handleCitySearch(e) {
        const { dispatch } = this.props;
        dispatch(updateCity(e.target.value));
    }

    handleSearchButton() {
        const { dispatch, cityName, toggle } = this.props; 
         dispatch(getWeather(cityName));
         dispatch(setCitySelection(cityName)); 
         dispatch(updateSearchHistory(toggle, cityName));
    }

    handleDefaultCities(e) {
        const { dispatch, toggle } = this.props;
        dispatch(updateCity(e.target.name));
        dispatch(getWeather(e.target.name));
        dispatch(setCitySelection(e.target.name)); 
        dispatch(updateSearchHistory(toggle, e.target.name));
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='btn-group'>
                        <button type='button' className='btn btn-dark' name='san diego' onClick={this.handleDefaultCities}>San Diego</button>
                        <button type='button' className='btn btn-dark' name='new york' onClick={this.handleDefaultCities}>New York</button>
                        <button type='button' className='btn btn-dark' name='dublin' onClick={this.handleDefaultCities}>Dublin</button>
                        <button type='button' className='btn btn-dark' name='mumbai' onClick={this.handleDefaultCities}>Mumbai</button>
                        <button type='button' className='btn btn-dark' name='dudinka' onClick={this.handleDefaultCities}>Dudinka</button>
                        <button type='button' className='btn btn-dark' name='addis ababa' onClick={this.handleDefaultCities}>Addis Ababa</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-group'>
                        <input type='text' className='form-control' placeholder='Enter City Name' onChange={this.handleCitySearch} />
                        <div className='input-group-append'>
                            <button className='btn btn-outline-secondary' type='button' onClick={this.handleSearchButton}>Go!</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}