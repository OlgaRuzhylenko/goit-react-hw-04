import { useEffect, useState } from "react";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import css from "./App.module.css";
import { fetchImg } from "../../pictures-api";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  const handleSearch = async (newQuery) => {
    setQuery(newQuery)
    setPage(1)
    setImages([])
  };
  const handleLoadMore = () => {
    setPage(page + 1)
     }
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
      {images.length > 0 && <ImageGallery items={images}/>}
      {isLoading && <Loader/>}
      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore}/>}
    </div>
   
  )
}
