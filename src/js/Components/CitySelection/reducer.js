const defaultState = {
    cityName: ''
  };
  
  export default function CitySelectionReducer (state = defaultState, action) {
    const { payload, type } = action;

    switch (type) {
        case 'UPDATE_CITY': {
          return {
            ...state,
            cityName: payload
          }
        }
        default: {
          return state
        }
      }
  }