export default function fitbitReducer(
  state ={
    loading: false,
    fitbitData: [],
  }, action) {
    switch (action.type) {

      case 'LOADING_FITBIT_DATA':
        return {...state, loading: true};

      case 'FETCH_FITBIT_DATA':
        return {loading: false, users: action.payload}

      default:
        return state;
      }
};
