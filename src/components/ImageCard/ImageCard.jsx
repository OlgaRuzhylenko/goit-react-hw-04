import css from './ImageCard.module.css'

export default function ImageCard({item, onImageClick}) {
  const handleClick = () => {
    onImageClick(item);
};
    return (
         <div>
  <img src={item.urls.small} alt={item.alt_description} className={css.img} onClick={handleClick}/>
		</div> 
    )
}
