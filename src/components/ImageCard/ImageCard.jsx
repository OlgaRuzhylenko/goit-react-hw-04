import css from './ImageCard.module.css'

export default function ImageCard({item, onClick }) {
  
    return (
         <div>
  <img src={item.urls.small} alt={item.alt_description} className={css.img} onClick={onClick}/>
		</div> 
    )
}
