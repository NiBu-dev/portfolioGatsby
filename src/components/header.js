import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => {
  if (typeof window !== 'undefined' &&
  window.document && window.document.createElement) {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }


  return (<header className="header">
    <nav className="header-nav">
      <a href="#work">
        Projects
  </a>
      <a href="#contact">
        Contact
  </a>
    </nav>
    <div className="waves">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 14" height="70" width="100%" preserveAspectRatio="none" aria-hidden="true" focusable="false" className="sc-1qsp046-2 fYAseG">
        <path fill="#2d3748" d="M 27 13.2106 C 13.776 13.6053 6.77605 8.38137 0 8.38137 L 0 0 L 54 0 L 54 6.21065 C 47.224 6.21065 40.224 12.816 27 13.2106 Z">
          <animate
            attributeName="d"
            values="M 27 10C 21 8 14 3 0 3L 0 0L 54 0L 54 14C 40 14 33 12 27 10Z;M 27 14C 12 14 5 7 0 7L 0 0L 54 0L 54 7C 49 7 42 14 27 14Z;M 27 10C 21 12 14 14 0 14L 0 0L 54 0L 54 3C 40 3 33 8 27 10Z;M 27 10C 21 12 14 14 0 14L 0 0L 54 0L 54 3C 40 3 33 8 27 10Z;M 27 14C 12 14 5 7 0 7L 0 0L 54 0L 54 7C 49 7 42 14 27 14Z;M 27 10C 21 8 14 3 0 3L 0 0L 54 0L 54 14C 40 14 33 12 27 10Z" repeatCount="indefinite" dur="25s">
          </animate>
        </path>
      </svg>
    </div>
  </header>)
}





Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
