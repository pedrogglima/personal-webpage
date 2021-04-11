import * as React from "react"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          {siteTitle}
        </span>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `@pedrogglima`,
}

export default Header
