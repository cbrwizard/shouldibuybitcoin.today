import React from 'react'
import { grey } from 'material-ui/colors'
import { withStyles } from 'material-ui/styles'



  
}

const styleSheet = {
  divider: {
    'border-bottom': `1px solid ${grey[200]}`,
  },
}
/*
* Is responsible for rendering the visual horizontal divider.
*/
export const Divider = (_props) => {
  

  return <div className={classes.divider} />
}

Divider.contextTypes = contextTypes

export default withStyles(styleSheet)(Divider)
