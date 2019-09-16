// handles user's data from Rails API for use in store
export default function userReducer(
  state ={
    loading: false,
    users: [],
  }, action) {
    switch (action.type) {

      case 'LOADING_USERS':
        return {...state, loading: true};

      case 'FETCH_USERS':
        return {loading: false, users: action.payload}

      default:
        return state;
    }
  };
