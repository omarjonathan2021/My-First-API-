import React from 'react'

import '../App.css'

const Footer = () => (
  <div className="footer">
    <p className="footer-copyright">
      &copy; Sample Inc. {new Date().getFullYear()}
    </p>
  </div>
)

export default Footer;