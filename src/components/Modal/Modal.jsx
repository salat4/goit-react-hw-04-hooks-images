import styles from "./Modal.module.css";
import { useEffect } from 'react';

const Modal = ({onClose,largeImageURL,handleModalEsc})=> {
useEffect(()=>{
    window.addEventListener("keydown", handleModalEsc, false);
    return () =>{
        window.removeEventListener("keydown", handleModalEsc, false);
    }
})
    return (
        <div className={styles.Overlay} onClick={onClose} onKeyDown={handleModalEsc} tabIndex={0}>
    <div className={styles.Modal}>
   <img src={largeImageURL} alt={"largeImageURL"}></img>     
    </div>
    </div>)
}


export default Modal;
