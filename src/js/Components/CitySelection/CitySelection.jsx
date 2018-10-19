import React from 'react';
import { updateCity } from './actions';


export default class CitySelection extends React.Component {
    constructor(props) {
        super(props);
        this.handleCitySearch = this.handleCitySearch.bind(this);
    }

    handleCitySearch(e) {
        const { dispatch } = this.props;
        dispatch(updateCity(e.target.value));
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='btn-group'>
                        <button type='button' className='btn btn-dark'>San Diego</button>
                        <button type='button' className='btn btn-dark'>San Diego</button>
                        <button type='button' className='btn btn-dark'>San Diego</button>
                        <button type='button' className='btn btn-dark'>San Diego</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-group'>
                        <input type='text' className='form-control' onChange={this.handleCitySearch} />
                        <div className='input-group-append'>
                            <button className='btn btn-outline-secondary' type='button'>Go!</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}