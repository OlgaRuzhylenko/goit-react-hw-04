import Modal from 'react-modal';
import css from './ImageModal.module.css'

export default function ImageModal({isOpen, onClose, selectedImage}) {
    return (
        <Modal isOpen={isOpen}>
          {selectedImage && (
            <div>
              <img src={selectedImage.urls.regular} alt={selectedImage.alt_description} />
              <button onClick={onClose}>Close Modal</button>
            </div>
          )}
        </Modal>
      );
}
