import { closePopup } from './index';
import { OPEN_MODAL, CLOSE_MODAL } from './types';

export function openModal(modalType) {
  return {
    type: OPEN_MODAL,
    payload: modalType
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
    payload: 'none'
  };
}
