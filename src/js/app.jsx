import React from 'react';
import CitySelection from './Components/CitySelection';
import DisplayResults from './Components/DisplayResults';
import DisplayPicture from './Components/DisplayPicture';
import SearchHistory from './Components/SearchHistory';


export default class App extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='jumbotron jumbotron-fluid bg-transparent text-center'>
          <div className='container'>
            <h1>Weather Report</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col mb-4'>
            <CitySelection />
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <DisplayResults />
            <SearchHistory />
          </div>
          <div className='col-6 mb-4'>
            <DisplayPicture />
          </div>
        </div>
      </div>
    );
  }
}
