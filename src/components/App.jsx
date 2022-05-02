import { useState, useEffect,useRef } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const App = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [totalHits , setTotalHits] = useState()


  const handleSubmit = e => {
    e.preventDefault();

    if(query === ""){
      return alert("Введіть слово");
    }
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
      setIsLoading(true)

      try {
        const response = await axios.get(
          `?q=${query}&page=${page}&key=25099977-05a832f59cefe7e3a7990f935&image_type=photo&orientation=horizontal&per_page=12`
        );
        
        setArticles(prevArticles => [...prevArticles, ...response.data.hits]);
        setTotalHits(response.data.totalHits)
      } catch (error) {
        setError(error);
      }
      finally{
        setIsLoading(true)
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
    {isLoading &&  <ImageGallery articles={articles} />}

     {query !== "" && (
       totalHits !== articles.length &&(
        <Button loadMore={loadMore} />

       )
     )}
     
    </div>
  );
};
