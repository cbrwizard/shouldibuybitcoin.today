import React from 'react'
import { func, object, string, shape, bool } from 'prop-types'
import { CirclePicker } from 'react-color'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'

import colors from 'shared/constants/colors'

const propTypes = {
  change: func.isRequired,
  classes: object.isRequired,
  input: object.isRequired,
  label: string,
  meta: shape({
    error: string,
    touched: bool,
  }).isRequired,
}
const defaultProps = {
  label: '',
}

const styleSheet = {
  label: {
    margin: '2px 0 10px',
  },
}

/*
* Is responsible for rendering a react-color colorpicker inside a RF's Field.
*/
const ReduxFormColorPickerField = ({
  classes,
  change,
  input,
  label,
  ...other
}) => (
  <div>
    <Typography className={classes.label} type="caption">
      {label}
    </Typography>
    <CirclePicker
      color={input.value}
      {...{ colors }}
      onChange={(color) => {
        change(input.name, color.hex)
      }}
      {...other}
    />
  </div>
)

ReduxFormColorPickerField.propTypes = propTypes
ReduxFormColorPickerField.defaultProps = defaultProps

export default withStyles(styleSheet)(ReduxFormColorPickerField)
