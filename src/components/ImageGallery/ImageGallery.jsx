import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css'

export default function ImageGallery({items}) {
    return (
        <ul>
        {items.map((item) => (
          <li key={item.id}>
            <ImageCard item={item} />
          </li>
        ))}
      </ul>
    )
}
