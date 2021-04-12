/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <div className="wrapper">
        <div className="wrapper-light-dark border-b border-default-color">
          <div className="container mx-auto">
            <Header siteTitle="pedrogglima" />
          </div>
        </div>
        <div className="bg-light-dark wrapper-main container mx-auto border-l border-r  border-default-color">
          <div className="container mx-auto">
            <main>{children}</main>
          </div>
        </div>
        <div className="wrapper-light-dark border-t border-default-color">
          <div className="container mx-auto">
            <Footer author="pedrogglima"></Footer>
          </div>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
