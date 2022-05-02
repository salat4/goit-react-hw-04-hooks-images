
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
const ImageGallery = ({articles}) => (
    <ul> 
      {articles.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          id={id}
          previewURL={webformatURL}
          tags={tags}
          largeImageURL={largeImageURL}
        />
      ))}
    </ul>
);
export default ImageGallery;
