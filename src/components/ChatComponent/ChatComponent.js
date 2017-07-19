import React, { Component } from 'react';
import './ChatComponent.css';


class ChatComponent extends Component {
  render() {
    return (
      <div className="flexbox-parent">
        <div className="flexbox-item fill-area content flexbox-item-grow">
            <div className="fill-area-content flexbox-item-grow stack">

              <div className="columns is-mobile">
                <div className="column is-4 is-offset-7">
                    <span className="content is-small">You</span>
                    <div className="notification is-primary">
                      Hi there!
                    </div>
                </div>
              </div>

              <div className="columns is-mobile">
                <div className="column is-4 is-offset-1">
                    <span className="content is-small">@alexis</span>
                    <div className="notification is-danger">
                      Yo, hi!
                    </div>
                </div>
              </div>

              <div className="columns is-mobile">
                <div className="column is-4 is-offset-7">
                    <span className="content is-small">You</span>
                    <div className="notification is-primary">
                      How are you?
                    </div>
                </div>
              </div>

            </div>
        </div>
        
        <div className="flexbox-item notification is-warning">
            <div className="field has-addons">
              <p className="control">
                <input className="input is-medium" type="text" placeholder="message..."/>
              </p>
              <p className="control">
                <a className="button is-info is-medium">
                  <span className="icon">
                    <i className="fa fa-send"></i>
                  </span>
                </a>
              </p>
            </div>
        </div>
    </div>
    )
  }
}

export default ChatComponent;