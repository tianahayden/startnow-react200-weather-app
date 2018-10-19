import React from 'react';

export default class DisplayResults extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className='card border border-primary'>
                    <div className='card-header bg-primary text-white'>
                        City Information
                    </div>
                    <div className='card-body text-center'>
                        <div className='row'>
                            <div className='col'>
                                <h1>Tokyo</h1>
                                <p>Lat/long</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <div className='row'>
                                    <div className='col-sm-4'>
                                        <h4>Title</h4>
                                        <p>Data</p>
                                    </div>
                                    <div className='col-sm-4'>
                                        <h4>Title</h4>
                                        <p>Data</p>
                                    </div>
                                    <div className='col-sm-4'>
                                        <h4>Title</h4>
                                        <p>Data</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-sm-4'>
                                        <h4>Title</h4>
                                        <p>Data</p>
                                    </div>
                                    <div className='col-sm-4'>
                                        <h4>Title</h4>
                                        <p>Data</p>
                                    </div>
                                    <div className='col-sm-4'>
                                        <h4>Title</h4>
                                        <p>Data</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}