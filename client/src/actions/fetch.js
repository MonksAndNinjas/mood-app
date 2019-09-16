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
