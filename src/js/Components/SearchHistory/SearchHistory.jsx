import React from 'react';

export default class SearchHistory extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className='card border border-primary'>
                    <div className='card-header bg-primary text-white'>
                        Search History
                    </div>
                    <table className='table table-striped'>
                    <tbody>
                        <tr>
                            <td className='col'>San Diego</td>
                            <td className='col'>Date/Time</td>
                        </tr>
                        <tr>
                            <td className='col'>New York</td>
                            <td className='col'>Date/Time</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        )
    }
}