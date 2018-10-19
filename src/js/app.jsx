import React from 'react';
import CitySelection from './Components/CitySelection';
import DisplayResults from './Components/DisplayResults';
import SearchHistory from './Components/SearchHistory';


export default class App extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='jumbotron jumbotron-fluid'>
          <div className='container'>
            <h1>Origin Weather Application</h1>
            <p>Always know if you'll need a sunhat!</p>
          </div>
        </div>
        <div className='row'>
          <div className='col mb-4'>
            <CitySelection />
          </div>
        </div>
          <div className='row'>
            <div className='col'>
              <DisplayResults />
            </div>
            <div className='col'>
              <SearchHistory />
            </div>
          </div>
      </div>
    );
  }
}
