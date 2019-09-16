import React from 'react';

import { connect } from 'react-redux';
import { fetchUser } from './actions/fetch';

class App extends React.Component {

  render() {

    return (
      <div>
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
  })
}

export default connect(mapStateToProps, { fetchUser })(App);
