import React from 'react';

//import { connect } from 'react-redux';
//import { fetchUser } from './actions/fetch';
//import { fetchFitbitData } from './actions/fetch';

class App extends React.Component {

  handleClick () {}

  render() {
    return (
      <div>
        <h1>Fitbit Mood Tracker</h1>

        <a onClick={handleClick()} href="/api/login">Log In</a>
      </div>
    );
  }

//  componentDidMount() {
//    this.props.fetchUser();
//  }
}

const mapStateToProps = state => {
  return({
    userData: state.users,
    fitbitData: state.fitbitData,
  })
}

export default App;

/*

<br/><br/>

<a  onClick={() => this.handleClick()} href="https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22B4Y3&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Ffitbit%2Fcallback&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800">Authorize Fitbit</a>

*/
