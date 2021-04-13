import * as React from "react"
import PropTypes from "prop-types"

const styleAuthor = author => <span>{author}</span>

const copyRight = () => <span>©</span>

const createAt = start => (
  <span>
    {start}-{new Date().getFullYear()}
  </span>
)

const Footer = ({ author }) => (
  <footer>
    <div className="container mx-auto px-6">
      <div className="flex flex-col items-center">
        <div className="text-center py-3">
          <span className="text-sm text-white mb-2">
            {styleAuthor(author)} {copyRight()} {createAt(2021)}
          </span>
        </div>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  author: PropTypes.string,
}

Footer.defaultProps = {
  author: `pedrogglima`,
}

export default Footer
