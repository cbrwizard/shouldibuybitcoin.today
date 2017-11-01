import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { pick } from 'ramda'

import Modal, { propTypes as modalPropTypes } from 'client/components/lib/Modal'
import * as modalsActions from 'client/actions/lib/modals'

const { func, shape } = PropTypes

const propTypes = {
  actions: shape({
    closeModal: func.isRequired,
    openModal: func.isRequired,
  }).isRequired,
}

export default modalId => (ModalBody) => {
  class ReduxModal extends React.Component {
    constructor(props) {
      super(props)

      this.bound_handleClose = this.handleClose.bind(this)
    }

    handleClose() {
      this.props.actions.closeModal(modalId)
    }

    render() {
      const modalPropKeys = Object.keys(modalPropTypes)
      const modalProps = pick(modalPropKeys, this.props)

      return (
        <Modal
          {...modalProps}
          onRequestClose={this.bound_handleClose}
        >
          <ModalBody onClose={this.bound_handleClose} />
        </Modal>
      )
    }
  }

  ReduxModal.propTypes = propTypes

  const mapStateToProps = state => ({
    open: state.app.modals[modalId],
  })

  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(modalsActions, dispatch),
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(ReduxModal)
}
