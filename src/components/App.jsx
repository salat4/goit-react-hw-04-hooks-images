import { useState,useEffect } from "react";
import axios from "axios";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import MyLoader from "./Loader/Loader";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";



axios.defaults.baseURL = "https://pixabay.com/api/";

export const App = () => {  
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

const handleSubmit = (e) => {
  e.preventDefault();
  setPage(1);
  setQuery(e.target.elements.query.value);
  setArticles([]);
  e.target.reset();
  }
  const loadMore = () => {
    setPage(prevPage => prevPage+1 )
  }
    useEffect(() => {
    async function fetchData() {
       try {
          const response = await axios.get(
            `?q=${query}&page=${page}&key=25099977-05a832f59cefe7e3a7990f935&image_type=photo&orientation=horizontal&per_page=12`
          )
          setArticles(prevArticles => [...prevArticles , ...response.data.hits] )
            }
      catch (error) {
          setError(error)
        }
      }
      fetchData();
  },[page, query])
  // handleModalOpen = (e) => {
  //   this.setState({ openModal: true });
  //   const largeImageURL = this.state.articles.find(Image =>Image.id.toString() === e.target.alt).largeImageURL 
  //   this.setState({ largeImageURL: largeImageURL })

  //   disablePageScroll();



  // };
  // handleModalClose = () => {
  //   this.setState({ openModal: false });
  //   enablePageScroll();
  // };
  // handleModalCloseEsc = (e) => {  
  //   if (e.key === "Escape") { this.setState({ openModal: false });
  //   enablePageScroll()}
    
  // }

  
    return (
      <div>
        <Searchbar value={query} handleSubmit={handleSubmit} />
      
        {/* handelChange={handelChange} */}
        <ImageGallery articles={articles} />
          <Button loadMore={loadMore}/>
        {/* {isLoading ? (
          <MyLoader />
        ) : (
          <ImageGallery
            articles={articles}
            openModal={openModal}
            handleModalOpen={this.handleModalOpen}
            handleModalClose={this.handleModalClose}
          />
        )}{" "}
        {openModal === true && (
          <Modal  handleModalClose={this.handleModalClose} largeImageURL = {this.state.largeImageURL} handleModalCloseEsc = {this.handleModalCloseEsc} />
        )}
        {totalHits !== articles.length && (
          query !== "" &&(
          <Button loadMore={this.loadMore} />
        ))} */}
      </div>
    );
  }

