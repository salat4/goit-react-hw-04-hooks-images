import { useState, useEffect,useRef } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import MyLoader from './Loader/Loader';
import Button from './Button/Button';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const App = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);


  const handleSubmit = e => {
    e.preventDefault();
    setPage(1);
    setQuery(e.target.elements.query.value);
    setArticles([]);
    e.target.reset();
  };
  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  const mounted = useRef();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `?q=${query}&page=${page}&key=25099977-05a832f59cefe7e3a7990f935&image_type=photo&orientation=horizontal&per_page=12`
        );
        setArticles(prevArticles => [...prevArticles, ...response.data.hits]);
      } catch (error) {
        setError(error);
      }
    }
    if(!mounted.current){
      mounted.current = true
        }
        else {
          fetchData()
        }
    
  }, [ page, query]);

 
  return (
    <div>
      <Searchbar handleSubmit={handleSubmit} />
      <ImageGallery articles={articles} />
      <Button loadMore={loadMore} />
     
    </div>
  );
};
