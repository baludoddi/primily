import React from "react"
import './features.css'

const Features = ({ siteTitle }) => (
//   <div className="row">
//       <div className="col s12">
          <div className="container">
          <div className="row">
              <div className="col s3">
                <div className="center-align feature-items">
                    <i className="Large material-iconss">call</i>
                    <div className="row"></div>
                    <h5>Multiple Numbers</h5>
                    <p>One or more phone numbers. Selectable area codes and numbers.</p>
                </div>
              </div>
              <div className="col s3">
              <div className="center-align feature-items">
                    <i className="Large material-iconss">notifications</i>
                    <div className="row"></div>
                    <h5>Real Time Notifications</h5>
                    <p>Acknowledgement and notification using SMS and/or Email.</p>
                </div>
              </div>
              <div className="col s3">
              <div className="center-align feature-items">
                    <i className="Large material-iconss">event_note</i>
                    <div className="row"></div>
                    <h5>Call logging</h5>
                    <p>Help adjust you routing and messaging with Real-time call logging reports.</p>
                </div>
              </div>
              <div className="col s3">
              <div className="center-align feature-items">
                    <i className="Large material-iconss">settings</i>
                    <div className="row"></div>
                    <h5>Easy Configuration </h5>
                    <p>Quick and Easy to modify Operating Hours, Holidays, Location, Services, Products and Call Routing.</p>
                </div>
              </div>
          </div>
          <div className="row"></div>
          <div className="row">
              <div className="col s3">
                <div className="center-align feature-items">
                    <i className="Large material-iconss">text_fields</i>
                    <div className="row"></div>
                    <h5>Text to Speech</h5>
                    <p>Simple to create phone selection responses using Text-to-Speech technology.</p>
                </div>
              </div>
              <div className="col s3">
              <div className="center-align feature-items">
                    <i className="Large material-iconss">attach_money</i>
                    <div className="row"></div>
                    <h5>Pay-As-You-Go</h5>
                    <p>No fixed monthly commitment. Low cost credits with SMS notification on remaining credits.</p>
                </div>
              </div>
              <div className="col s3">
              <div className="center-align feature-items">
                    <i className="Large material-iconss">pie_chart</i>
                    <div className="row"></div>
                    <h5>Real Tine Reporting</h5>
                    <p>View you call logs anytime from anywhere.</p>
                </div>
              </div>
              <div className="col s3">
              <div className="center-align feature-items">
                    <i className="Large material-iconss">phone_android</i>
                    <div className="row"></div>
                    <h5>Mobile App for Routing</h5>
                    <p>Create and modify interactive selection routing amd responce using your modile device.</p>
                </div>
              </div>
          </div>
          </div>
//       </div>
//   </div>
)

export default Features
