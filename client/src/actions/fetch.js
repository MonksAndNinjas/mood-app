// fetches data from Rails API
export function fetchUser() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_USERS' });

    return fetch('/api/user', {
      accept: 'application/json',
    }).then(response => response.json())
      .then(users => dispatch({ type: 'FETCH_USERS', payload: users }))
  }
}

export function fetchFitbitData() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_FITBIT_DATA' });

    return fetch('/api', {
      accept: 'application/json',
    }).then(response => response.json())
      .then(fitbitData => dispatch({ type: 'FETCH_FITBIT_DATA', payload: fitbitData }))
  }
}
