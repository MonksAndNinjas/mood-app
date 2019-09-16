// fetches data from Rails API
export function fetchBlogPosts() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_USERS' });

    return fetch('api/users', {
      accept: 'application/json',
    }).then(response => response.json())
      .then(users => dispatch({ type: 'FETCH_USERS', payload: users }))
  }
}
