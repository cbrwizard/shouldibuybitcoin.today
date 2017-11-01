import React from 'react'
import PropTypes from 'prop-types'
import Dialog from 'material-ui/Dialog'
import { pick } from 'ramda'

const dialogProps = ['onRequestClose', 'open', 'leaveTransitionDuration']
const { bool, func, node } = PropTypes

export const propTypes = {
  children: node.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  onRequestClose: func.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  open: bool,
}
const defaultProps = {
  children: [],
  open: false,
}

class Modal extends React.Component {
  dialogOptions() {
    return {
      ...pick(dialogProps, this.props),
    }
  }

  render() {
    return (
      <Dialog {...this.dialogOptions()}>
        {this.props.children}
      </Dialog>
    )
  }
  // render() {
  //   return (
  //     <Dialog {...this.dialogOptions()}>
  //       {this.props.children}
  //     </Dialog>
  //   )
  // }
}

Modal.propTypes = propTypes
Modal.defaultProps = defaultProps

export default Modal
