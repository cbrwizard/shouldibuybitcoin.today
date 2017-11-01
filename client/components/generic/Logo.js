import React from 'react'
import { withStyles } from 'material-ui/styles'
import { object } from 'prop-types'
import logoPath from 'client/images/logo_full.svg'

const propTypes = {
  classes: object.isRequired,
}
const styleSheet = {
  image: {
    'max-width': '100%',
  },
}

/*
* Is responsible for rendering the logo image.
*/
const Logo = ({ classes }) => (
  <img alt="shouldibuybitcoin" className={classes.image} src={logoPath} />
)

Logo.propTypes = propTypes

export default withStyles(styleSheet)(Logo)
