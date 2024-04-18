import { useState } from "react";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import css from "./App.module.css";
import { fetchImg } from "../../pictures-api";

export default function App() {
  const [images, setImages] = useState([]);

  const handleSearch = async (newQuery) => {
    try {
      const data = await fetchImg(newQuery);
      console.log(data);
      setImages(data)
     
    } catch (error) {
    } finally {
      
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {/* {images.length > 0 && <ImageGallery items={images}/>} */}
       <ImageGallery items={images}/>
    </div>
  );
}
