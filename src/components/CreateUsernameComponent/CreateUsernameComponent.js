import React, { Component } from 'react';
import {
  Redirect
} from 'react-router-dom';


class CreateUsernameComponent extends Component {


  constructor(props) {
    super(props);
    this.state = {redirectToReferrer: false, username:'', err_msg:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    //TODO: post data to server
  }

  handleChange(e){
    this.setState({username: e.target.value});
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
    return (
      <section className="hero  is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-centered">Firebase chat app</h1>
              <h2 className="subtitle has-text-centered">Example react based v1.0</h2>
              
              { alertNotif }
              <div className="field is-grouped">
                <p className="control has-icons-left is-expanded">
                  <input className="input is-medium" type="text" placeholder="create username" value={this.state.username} onChange={this.handleChange}/>
                  <span className="icon is-medium is-left">
                    <i className="fa fa-at"></i>
                  </span>
                </p>
                <p className="control">
                  <button className="button is-medium is-primary" onClick={this.handleSubmit}>
                    Start
                  </button>
                </p>
              </div>
          </div>
        </div>
      </section>
    )
  }
}

export default CreateUsernameComponent;