import React from "react"
import './describe.css'

const Describe = ({ siteTitle }) => (
          <div className="container">
          <div className="row">
              <div className="col s4">
                <div className="center-align feature-items">
                    <h5>No Lost Calls</h5>
                    <p>A major chunk of the business comes through phone and if any call goes unanswered, it simply means you are missing out on leads.</p>
                    <img className="responsive-img" src={require('../../assets/images/routing.png')} />
                    <h5>How It Works</h5>
                    <p>IVR relies on pre-recorded questions and responses for interacting with callers and direct calls to appropriate human agents. The IVR system prompts caller to select an option from a set menu using keypad responses and incoming telephone calls are routed to the relevant department.</p>
                </div>
              </div>
              <div className="col s4">
                  <div className="row">
                      <div className="col s1"><i className="Large material-icons">satellite</i></div>
                      <div className="col s11">
                        <div className="center-align feature-items">
                            <h5>What is Advanced Virtual Answering Service (AVAS)?</h5>
                            <p>AVAS is a cloud service based on Interactive Voice Response (IVS) technology that enables interaction between a caller and our AVAS cloud via the telephone.
Callers can interact with our AVAS Cloud Solution by pressing numbers on their telephone keypad to get voice prompts to receive various information for for your customers. Common uses for our AVAS service include finding store locations, store hours, promotional specials, call routing to a department or person and other information to present to your customers.</p>
                        </div>
                      </div>
                  </div>
                  <div className="row"></div>
                  <div className="row"></div>
                  <div className="row"></div>
                  <div className="row">
                      <div className="col s1"><i className="Large material-icons">share</i></div>
                      <div className="col s11">
                        <div className="center-align feature-items">
                            <h5>Simple Mobile Phone Designer</h5>
                            <p>The AVAS Designer allows you easily create and modify your calls routing according to your business needs from any mobile device.</p>
                        </div>
                      </div>
                  </div>

              </div>
              <div className="col s4">
              <div className="row">
                      <div className="col s1"><i className="Large material-icons">cloud</i></div>
                      <div className="col s11">
                        <div className="center-align feature-items">
                            <h5>Our AVAS Service</h5>
                            <p>We offer cloud hosted virtual mobile number solution that help customers to connect to the right department in any organization/business in short span of time and ensures no business call is lost</p>
                        </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col s1"><i className="Large material-icons">call</i></div>
                      <div className="col s11">
                        <div className="center-align feature-items">
                            <h5>Virtural Phone Number</h5>
                            <p>Using a Hosted Virtual Phone Number in the cloud there is no hardware purchase. In minutes add additional numbers as you need them and in any area code you like.</p>
                        </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col s1"><i className="Large material-icons">attach_money</i></div>
                      <div className="col s11">
                        <div className="center-align feature-items">
                            <h5>Pay as you Go and Grow</h5>
                            <p>Start with a low cost Pay-as-you-go service and add additional services and feature as you business grows.</p>
                        </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col s1"><i className="Large material-icons">autorenew</i></div>
                      <div className="col s11">
                        <div className="center-align feature-items">
                            <h5>Automated Surveys</h5>
                            <p>Create a automated voice survey to get feedback on on your service, products, etc.</p>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
          </div>
)

export default Describe
