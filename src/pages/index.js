import React from "react"
import { Link } from "gatsby"
import Features from "../components/features/features"
import Describe from "../components/describe/describe"
import Layout from "../components/layout"
import Image from "../components/image"
import Video from "../components/video/video"
import Description from "../components/description/description"
import AppsGallery from "../components/appsgallery/appsgallery"
import Pricing from "../components/pricing/pricing"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="row">
    <div className="col s12 m12 l12">
      <div id="features" className="section scrollspy">
        <Features />
        <div className="row"></div>
        <div className="row"></div>
      </div>

      <div id="describe" className="section scrollspy grey lighten-4">
      <div className="row"></div>
      <div className="row"></div>
        <Describe />
      </div>
      <div className="section scrollspy">
        <div className="row"></div>
        <div className="row"></div>
      <Video />
      </div>
      <div className="section scrollspy grey lighten-4">
        <div className="row"></div>
        <div className="row"></div>
      <Description />
      </div>
      <div className="section scrollspy indigo darken-4">
        <div className="row"></div>
        <div className="row"></div>
      <AppsGallery />
      </div>
      <div className="section scrollspy grey lighten-4">
        <div className="row"></div>
        <div className="row"></div>
      <Pricing />
      </div>

      <div id="initialization" className="section scrollspy">
        <p>Content </p>
      </div>
    </div>
  </div>
  </Layout>
)

export default IndexPage
