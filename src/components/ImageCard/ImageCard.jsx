import css from './ImageCard.module.css'

export default function ImageCard({item}) {
    return (
         <div>
  <img src={item.urls.small} alt={item.alt_description} className={css.img}/>
		</div> 
    )
}
