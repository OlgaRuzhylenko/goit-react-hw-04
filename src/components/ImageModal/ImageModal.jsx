import Modal from 'react-modal';
import css from './ImageModal.module.css'


export default function ImageModal({ isOpen, closeModal, imageData }) {
 
    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal} className={css.Modal}>
            {imageData && (
        <div className={css.container}>
          <img src={imageData.url} alt={imageData.description} className={css.img}/>
           </div>
      )}
     
        </Modal>
       
      );
}
