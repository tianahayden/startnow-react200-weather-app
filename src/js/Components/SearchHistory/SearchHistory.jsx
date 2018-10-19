import React from 'react';

export default class SearchHistory extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { searchHistory } = this.props;
        return (
            <div>
                <div className='card border border-primary'>
                    <div className='card-header bg-primary text-white'>
                        Search History
                    </div>
                    <table className='table table-striped'>
                        <tbody>
                            {
                                searchHistory.map((e,i) => (
                                    <tr key={i}>
                                        <td className='col text-capitalize'>{e.name}</td>
                                        <td className='col'>{e.date}</td>
                                        <td className='col'>{e.time}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}