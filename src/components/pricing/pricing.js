import React from "react"
import './pricing.css'

const Pricing = ({ siteTitle }) => (
    <div className="container">
    <div className="row">
        <div className="col s12 center-align feature-items">
            <h4 className="pricing-h">Our pricing is simple</h4>
            <p>Except for our monthly $2/phone number, there are No Contracts or other monthly fees. </p>
            <p>You purchase Credits and are notified as these run low.</p>
        </div>

            <div className="col s6">
                <div className="single_pricing wow fadeIn" data-wow-duration="1.5s">
                    <div className="top_text">
                        <h4>Free Real-Time Trial</h4>
                        <h6>No cost account creation</h6>
                        <p>Create an no cost account and try various routing configurations modified for your business.</p>
                    </div>
                    <ul>
                        <li><img src={require("../../assets/images/tic.png")} alt="" />Store Hours</li>
                        <li><img src={require("../../assets/images/tic.png")} alt="" />Location</li>
                        <li><img src={require("../../assets/images/tic.png")} alt="" />Greeting</li>
                        <li><img src={require("../../assets/images/tic.png")} alt="" />Free trial phone number</li>
                    </ul>
                    <hr />
                    <div className="table_info">
                        <div className="info_head_text">
                            <sub>$</sub>0<span></span>
                        </div>
                        <a href="" className="btn-sm">sign up</a> <a href="" className="info_right_text">Free Live Trial</a>
                    </div>
                </div>
            </div>

            <div className="col s6">
                <div className="single_pricing economy_table wow fadeIn" data-wow-duration="1.6s">
                    <div className="top_text">
                        <h4>Base Credits</h4>
                        <h6> Credits</h6>
                        <p>No monthly commitment or payments. Purchase credits as you need them.</p>
                    </div>
                    <ul>
                        <li><img src="images/tic.png" alt="" />Phone Number(s)</li>
                        <li><img src="images/tic.png" alt="" />Fully customizable starter templates</li>
                        <li><img src="images/tic.png" alt="" />Summary and Detailed Call Log Reports</li>
                        <li><img src="images/tic.png" alt="" />Select you US area code</li>
                    </ul>
                    <hr />
                    <div className="table_info">
                        <div className="info_head_text">
                            <sub>$</sub>20<span></span>
                        </div>
                        <a href="" className="btn-sm">sign up</a> <a href="" className="info_right_text">No monthly commitment.</a>
                    </div>
                </div>
            </div>
    </div>
    </div>
)

export default Pricing
