// import * as basicLightbox from "basiclightbox";
import { useState } from 'react';
import Modal from '../Modal/Modal';
const ImageGalleryItem = ({
  id,
  previewURL,
  largeImageURL,
}) => {
  const handleModal = () =>{
    setIsOpen(true)
  }
const handleModalEsc = (e)=>{
  if (e.key === "Escape") {
    setIsOpen(false)
  }
}

  const [isOpen , setIsOpen] = useState(false)
  return (
    <li key={id}>
    <img src={previewURL} alt={id} onClick={handleModal}></img>
      {isOpen && <Modal largeImageURL = {largeImageURL} onClose ={()=> setIsOpen(false)} handleModalEsc = {handleModalEsc}/>}
  </li>
);
}
 
export default ImageGalleryItem;
