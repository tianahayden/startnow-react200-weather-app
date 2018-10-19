import axios from 'axios';

export const updateCity = (value) => {
    return {
      type: 'UPDATE_CITY',
      payload: value
    }
  };