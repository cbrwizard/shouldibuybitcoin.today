import Button from 'material-ui/Button'
import React from 'react'
import PropTypes from 'prop-types'
import SettingsIcon from 'material-ui-icons/Settings'

import ConnectedSettingsFormModal
  from 'client/containers/users/ConnectedSettingsFormModal'

const { func } = PropTypes
const propTypes = {
  onClick: func.isRequired,
}

/*
* Is responsible for rendering a Settings Button.
*/
const SettingsButton = ({ onClick }) => (
  <Button className="js-settings-button" dense raised {...{ onClick }}>
    <SettingsIcon />

    <ConnectedSettingsFormModal />
  </Button>
)

SettingsButton.propTypes = propTypes

export default SettingsButton
