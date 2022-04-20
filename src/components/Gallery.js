import { lazy } from 'react';
const Image = lazy(() => import('./Image'));

function Gallery(props) {
  const { images } = props;
  return (
    <div className="container">
      {images &&
        images.length > 0 &&
        images.map((image) => {
          return (
            <Image
              className="item"
              src={image.urls.regular}
              alt={image.alt_description}
              width="auto"
              id={image.id}
              key={image.id}
              srcSet={`${image.urls.regular} 640w,${image.urls.small} 480w,`}
              sizes="(max-width: 640px) 640px, (max-width: 320px) 320px"
            />
          );
        })}
    </div>
  );
}

export default Gallery;
