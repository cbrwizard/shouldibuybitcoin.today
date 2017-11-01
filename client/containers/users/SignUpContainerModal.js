import React from 'react'

import ReduxModal from 'client/containers/lib/ReduxModal'
import { SIGN_UP_MODAL } from 'client/constants/modals'
import SignUpContainer from 'client/containers/users/SignUpContainer'

/*
 * Is responsible for rendering the SignUp container in a modal.
 */
export const SignUp = () => <SignUpContainer />

const SignUpContainerModal = ReduxModal(SIGN_UP_MODAL)(SignUp)
export default SignUpContainerModal
