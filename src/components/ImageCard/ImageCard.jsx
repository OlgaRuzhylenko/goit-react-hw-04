import css from './ImageCard.module.css'

export default function ImageCard({item, onClick }) {
  
    return (
         <div className={css.box}>
  <img src={item.urls.small} alt={item.alt_description} className={css.img} onClick={onClick}/>
		</div> 
    )
}
