import React from 'react';

export default class DisplayResults extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        if (this.props.toggle === true) {
            return (
                <div>
                    <div className='card border border-info mb-4'>
                        <div className='card-header bg-info text-white'>
                            City Information
                    </div>
                        <div className='card-body text-center'>
                            <div className='row'>
                                <div className='col'>
                                    <h1 className='text-capitalize'>{this.props.citySelected}</h1>
                                    <p>{this.props.country}</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <div className='row'>
                                        <div className='col-sm-4'>
                                            <h4>Temperature (F)</h4>
                                            <p>{this.props.temperature}</p>
                                        </div>
                                        <div className='col-sm-4'>
                                            <h4>High / Low (F)</h4>
                                            <p>{this.props.highTemp} / {this.props.lowTemp} </p>
                                        </div>
                                        <div className='col-sm-4'>
                                            <h4>Humidity</h4>
                                            <p>{this.props.humidity}</p>
                                        </div>
                                    </div>
                                    <div className='row mb-5'>
                                        <div className='col-sm-4'>
                                            <h4>Sunrise</h4>
                                            <p>{this.props.sunrise}</p>
                                        </div>
                                        <div className='col-sm-4'>
                                            <h4>Sunset</h4>
                                            <p>{this.props.sunset}</p>
                                        </div>
                                        <div className='col-sm-4'>
                                            <h4>Wind Speed</h4>
                                            <p>{this.props.windSpeed}</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col text-center text-muted'>
                                            <p>Note: sunrise and sunset are shown in the timezone of your browser</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return null;
        }
    }
}
