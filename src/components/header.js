import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="flex items-center justify-between flex-wrap p-4">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <StaticImage
          src="../images/me-about.jpeg"
          width={50}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Me - photo"
          style={{ marginBottom: `0 rem`, borderRadius: "100%" }}
        />
        <span className="mx-4 font-semibold text-xl tracking-tight">
          {siteTitle}
        </span>
      </div>
      <div className="flex items-center flex-grow"></div>
      <div className=" text-white">
        <Link to="https://github.com/pedrogglima">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </Link>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `pedrogglima`,
}

export default Header
