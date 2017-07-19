import React, { Component } from 'react';
import {
  Redirect
} from 'react-router-dom';
import {requestNotificationPermission} from '../../notifications.js';


class PermissionInfoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {redirectToReferrer: false, err_msg:''};

    this.showNotificationPermissionNotification = this.showNotificationPermissionNotification.bind(this);
    this.permissionGranted = this.permissionGranted.bind(this);
    this.permissionError = this.permissionError.bind(this);
  }

  showNotificationPermissionNotification(){
    this.setState({err_msg:''});
    requestNotificationPermission(this.permissionGranted, this.permissionError);
  }

  permissionGranted(currentToken){
    localStorage.setItem('GFE_DeviceId', currentToken);
    this.setState({ redirectToReferrer: true })
  }

  permissionError(msg){
    localStorage.removeItem('GFE_DeviceId');
    this.setState({err_msg:msg});
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;
    
    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }
    const { err_msg } = this.state;
    const alertNotif = err_msg.length ? <div className="notification is-danger">{err_msg}</div> : null
    return(
      <section className="hero  is-fullheight">
        <div className="hero-body">
          <div className="container is-fluid">
            <h1 className="title has-text-centered">Notification Permission request</h1>
              <h2 className="subtitle has-text-centered">In order to work this app must be granted notification permissions</h2>
              { alertNotif }
                  <div className="level is-mobile">
                  <button className="button is-medium is-primary level-item" onClick={this.showNotificationPermissionNotification}>
                    Ok, give permission
                  </button>
                  </div>
          </div>
        </div>
      </section>
    )
  }
}

export default PermissionInfoComponent;