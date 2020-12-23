import '../css/styles.css';
import { modalBackDrop } from '../modal-window/dev-modal';

const studentBtn = document.querySelector('.js-students');
studentBtn.addEventListener('click', hendelOpenStudentModal);
function hendelOpenStudentModal(e) {
  modalBackDrop();
  const body = document.querySelector('body');
  const container = document.querySelector('.modal');
  const closeBnt = document.querySelector('.student-modal__close-btn');
  function closeModal() {
    container.classList.remove('show-modal');
    body.style.overflow = 'unset';
  }
  closeBnt.addEventListener('click', closeModal);
}
