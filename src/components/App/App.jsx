import { useState } from "react";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import css from "./App.module.css";
import { fetchImg } from "../../pictures-api";

export default function App() {
  const [image, setImage] = useState([]);

  const handleSearch = async (newQuery) => {
    try {
      const data = await fetchImg(newQuery);
      setImage(data);
    } catch (error) {
    } finally {
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
}
