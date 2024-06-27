import React, { useState } from 'react';
// import SyncIcon from '@mui/icons-material/Sync';
import '../Styling/image-with-loader.css'
const ImageWithLoader = ({ src, alt,width, height }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleImageError = () => {
    setLoading(false); // You might want to handle the error differently
  };

 
  return (
    <>
      {loading && <div className="loader"></div>}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={handleImageLoad}
        onError={handleImageError}
        style={{ display: loading ? 'none' : 'inline-block' }}
      />
    </>
  );
};

export default ImageWithLoader;