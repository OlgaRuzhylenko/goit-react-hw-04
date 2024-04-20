import Modal from 'react-modal';
import css from './ImageModal.module.css'

export default function ImageModal({ isOpen, closeModal, imageData }) {
  // Modal.setAppElement('#root');
    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal}>
            {imageData && (
        <div>
          <img src={imageData.urls.regular} alt={imageData.alt_description} />
           </div>
      )}
      <button onClick={closeModal}>Close Modal</button>
        </Modal>
       
      );
}
