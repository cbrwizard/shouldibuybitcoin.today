import { connect } from 'react-redux'

import { openModal } from 'client/actions/lib/modals'
import { SETTINGS_MODAL } from 'client/constants/modals'
import SettingsButton from 'client/components/users/SettingsButton'

const mapStateToProps = null
const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(openModal(SETTINGS_MODAL))
  },
})

const SettingsButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsButton)

export default SettingsButtonContainer
