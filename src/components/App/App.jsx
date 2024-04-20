import { useEffect, useState } from "react";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import css from "./App.module.css";
import { fetchImg } from "../../pictures-api";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true); // Відкриття модального вікна при кліку на зображення
};

  const handleSearch = async (newQuery) => {
    setQuery(newQuery)
    setPage(1)
    setImages([])
  };
  const handleLoadMore = () => {
    setPage(page + 1)
     }
const handleOpenModal = () => {
    setShowModal(true)
    // const imgId = images.filter(image=> image.id)
    // console.log(imgId);
}
const handleCloseModal = () => {
  setShowModal(false)
}
// const selectedImg = images.filter(image => image.id === )
  useEffect (()=> {
    if (query === '') {
      return
    }
    async function getImages(){
  try {
    setIsLoading(true)
    const data = await fetchImg(query, page);
    setImages((prevImages)=>{
return [...prevImages, ...data]
    })
  } catch (error) {
    setError(true)
  } finally {
    setIsLoading(false)
  }
    } getImages()
  }, [query, page])

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage/>}
      {images.length > 0 && <ImageGallery items={images} onImageClick={handleImageClick}/>}
      {isLoading && <Loader/>}
      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore}/>}
      <ImageModal isOpen={showModal} onClose={handleCloseModal} selectedImage={selectedImage} />
    </div>
   
  )
}
