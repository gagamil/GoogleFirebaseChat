import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import 'bulma/css/bulma.css'
import registerServiceWorker from './registerServiceWorker';

import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import bulma from 'bulma'; 

import CreateUsernameComponent from './components/CreateUsernameComponent/CreateUsernameComponent.js';
import ChatComponent from './components/ChatComponent/ChatComponent.js';
import PermissionInfoComponent from './components/PermissionInfoComponent/PermissionInfoComponent.js';
import Auth from './auth.js';


const RoutedApp = () => (
  <Router>
    <div>
      <NeedNotificationsEnabledRoute path="/" component={CreateUsernameComponent}/>
      <Route path="/notificationpermissions" component={PermissionInfoComponent}/>
      <PrivateRoute path="/chat" component={ChatComponent}/>
    </div>
  </Router>
)


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
      Auth.isAuthenticated ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }}/>
      )
  )}/>
)


const NeedNotificationsEnabledRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('GFE_DeviceId') ? (
      <Component {...props}/>
    ):(
      <Redirect to={{
          pathname: '/notificationpermissions',
          state: { from: props.location }
        }}/>
    )
  )}/>
)

ReactDOM.render(<RoutedApp />, document.getElementById('root'));
registerServiceWorker();