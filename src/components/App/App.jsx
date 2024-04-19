import { useState } from "react";
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

  const handleSearch = async (newQuery) => {
    try {
      setIsLoading(true)
      const data = await fetchImg(newQuery);
      setImages(data)
    } catch (error) {
      setError(true)
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage/>}
      {images.length > 0 && <ImageGallery items={images}/>}
      {isLoading && <Loader/>}
    </div>
   
  )
}
