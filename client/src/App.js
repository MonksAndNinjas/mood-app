import React from 'react';

import { connect } from 'react-redux';
import { fetchUser } from './actions/fetch';
import { fetchFitbitData } from './actions/fetch';

class App extends React.Component {

  render() {

    return (
      <div>
        <h1>Fitbit Mood App</h1>

        <br/><br/>

        <a href="/auth/fitbit">Authorize Fitbit</a>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchUser();
  }
}

const mapStateToProps = state => {

  return({
    userData: state.users,
    fitbitData: state.fitbitData,
  })
}

export default connect(mapStateToProps, { fetchUser, fetchFitbitData })(App);

/*
{ (this.props.userData.loading === false && this.props.userData.users.length !== 0) ? (
    <div>
      <span>Current User: {this.props.userData.users[0].name}</span>
    </div>
  ) : (
    null
  )
}
*/
