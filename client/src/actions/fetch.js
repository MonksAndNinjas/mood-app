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

export function fetchFitbitData(u, a) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_FITBIT_DATA' });

    var bearer = 'Bearer ' + a;

    return fetch('https://api.fitbit.com/1/user/' + u + '/activities/heart/date/today/1w.json', {
      headers: {
        'Authorization': bearer,
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(data => console.log(data))
  }
}
