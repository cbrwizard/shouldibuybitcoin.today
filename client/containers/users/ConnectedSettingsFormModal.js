import React from 'react'

import ReduxModal from 'client/containers/lib/ReduxModal'
import { SETTINGS_MODAL } from 'client/constants/modals'
import ConnectedSettingsForm from 'client/containers/users/ConnectedSettingsForm'

/*
 * Is responsible for rendering the Settings form container in a modal.
 */
export const SettingsForm = () => <ConnectedSettingsForm />

const ConnectedSettingsFormModal = ReduxModal(SETTINGS_MODAL)(SettingsForm)
export default ConnectedSettingsFormModal
