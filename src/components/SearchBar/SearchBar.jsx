import toast, { Toaster } from 'react-hot-toast';
import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
   const text = form.elements.text.value;
   if (text === '') {
    toast.error('Please, enter your request');
   }
   onSearch(text)
   form.reset();
  }
  return (
    <header>
  <form onSubmit={handleSubmit}>
    <input
    name='text'
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
    <button type="submit">Search</button>
    <Toaster />
  </form>
</header>
  );
}
