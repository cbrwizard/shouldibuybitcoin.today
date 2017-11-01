import { OPEN_MODAL, CLOSE_MODAL } from 'client/constants/lib/modals'

export const closeModal = modalId => ({
  modalId,
  type: CLOSE_MODAL,
})

export const openModal = modalId => ({
  modalId,
  type: OPEN_MODAL,
})
