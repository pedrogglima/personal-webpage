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
      <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
        <div className="text-center py-3">
          <span className="text-sm mb-2">
            {styleAuthor(author)} {copyRight()} {createAt(2020)}
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
