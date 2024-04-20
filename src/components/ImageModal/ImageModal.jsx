import Modal from 'react-modal';
import css from './ImageModal.module.css'

export default function ImageModal({ isOpen, closeModal, imageData }) {
 
    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal}>
            {imageData && (
        <div>
          <img src={imageData.url} alt={imageData.description} />
           </div>
      )}
      <button onClick={closeModal}>Close Modal</button>
        </Modal>
       
      );
}
