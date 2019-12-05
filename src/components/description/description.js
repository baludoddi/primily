import React from "react"
import './description.css'

const Description = ({ siteTitle }) => (
    <div className="container">
    <div className="row">
        <div className="col s4 center-align">
                <img src={require("../../assets/images/iphone-w1.png")} className="responsive-img" alt="" />
                <img src={require("../../assets/images/d1.png")} className="responsive-img" height="67"
                     width="232"/>
        </div>
        <div className="col s2"></div>
        <div className="col s6">
            <div className="feature-items">
                <h4 className="description-font">[Description of the Mobile App]</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt efficitur vestibulum. Phasellus nisl leo, congue eu malesuada lobortis, fringilla et nulla.</p>
                <div className="row"></div>
                <div className="row"></div>
                <div className="row">
                      <div className="col s1"><i className="Large material-icons">security</i></div>
                      <div className="col s11">
                        <div className="feature-items">
                            <h5>Our AVAS Service</h5>
                            <p>We offer cloud hosted virtual mobile number solution that help customers to connect to the right department in any organization/business in short span of time and ensures no business call is lost</p>
                        </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col s1"><i className="Large material-icons">reply_all</i></div>
                      <div className="col s11">
                        <div className="feature-items">
                            <h5>Virtural Phone Number</h5>
                            <p>Using a Hosted Virtual Phone Number in the cloud there is no hardware purchase. In minutes add additional numbers as you need them and in any area code you like.</p>
                        </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col s1"><i className="Large material-icons">insert_drive_file</i></div>
                      <div className="col s11">
                        <div className="feature-items">
                            <h5>Pay as you Go and Grow</h5>
                            <p>Start with a low cost Pay-as-you-go service and add additional services and feature as you business grows.</p>
                        </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col s1"><i className="Large material-icons">monetization_on</i></div>
                      <div className="col s11">
                        <div className="feature-items">
                            <h5>Automated Surveys</h5>
                            <p>Create a automated voice survey to get feedback on on your service, products, etc.</p>
                        </div>
                      </div>
                  </div>
            </div>
        </div>
    </div>
</div>
)

export default Description
