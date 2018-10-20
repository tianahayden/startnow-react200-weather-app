import React from 'react';

export default class SearchHistory extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { searchHistory } = this.props;
        if (this.props.toggle === true) {
            return (
                <div>
                    <div className='card border border-info'>
                        <div className='card-header bg-info text-white'>
                            Search History
                    </div>
                        <table className='table table-striped'>
                            <tbody>
                                {
                                    searchHistory.map((e, i) => (
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
        else {
            return null;
        }
    }
}