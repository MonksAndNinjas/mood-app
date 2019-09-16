import React from 'react';

import { connect } from 'react-redux';
import { fetchUser } from './actions/fetch';

class App extends React.Component {

  render() {

    return (
      <div>
        { (this.props.userData.loading === false && this.props.userData.users.length !== 0) ? (
            <div>
              <span>{this.props.userData.users[0].name}</span>
            </div>
          ) : (
            null
          )
        }
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
