import React from 'react';

//import { connect } from 'react-redux';
//import { fetchUser } from './actions/fetch';
//import { fetchFitbitData } from './actions/fetch';

class Fitbit extends React.Component {

  render() {
    return (
      <div>
      </div>
    );
  }

  componentDidMount() {
  //  var url = window.location.href;
    //getting the access token from url
  //  var access_token = url.split("#")[1].split("=")[1].split("&")[0];
    // get the userid
  //  var userId = url.split("#")[1].split("=")[2].split("&")[0];

    //this.props.fetchFitbitData(userId, access_token);
  }
}

/*const mapStateToProps = state => {
  return({
    userData: state.users,
    fitbitData: state.fitbitData,
  })
}*/

export default Fitbit;
