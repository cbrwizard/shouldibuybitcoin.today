import React, { Component } from 'react'
import { arrayOf, func, string } from 'prop-types'
import uploadcare from 'uploadcare-widget'

import isProduction from 'shared/lib/isProduction'

const propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  onChange: func.isRequired,
  validators: arrayOf(func),
}
const defaultProps = {
  validators: [],
}

/**
 * Is responsible for rendering the uploadcare widget.
 */
class Uploader extends Component {
  componentDidMount() {
    const { id, onChange, validators } = this.props
    const widget = uploadcare.Widget(`#${id}`)

    widget.onChange((file) => {
      if (file) {
        file.done(info => onChange(info.cdnUrl)).fail(() => onChange(null))
      } else {
        onChange(null)
      }
    })
    widget.validators.push(...validators)
  }

  render() {
    const { id, name, validators: omitValidators, ...attrs } = this.props

    return (
      <input
        type="hidden"
        id={id}
        name={name}
        {...attrs}
        data-clearable
        data-do-not-store={!isProduction}
        data-images-only
        data-preview-step
      />
    )
  }
}

Uploader.propTypes = propTypes
Uploader.defaultProps = defaultProps

export default Uploader
