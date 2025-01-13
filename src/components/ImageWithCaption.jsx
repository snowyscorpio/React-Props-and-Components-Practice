import React from 'react';

function ImageWithCaption({ src, caption }) {
  return (
    <div>
      {src ? <div><img src={src} alt={caption || "Image"} />{caption && <p>{caption}</p>}</div> : <p>Image not available</p>}
    </div>
  );
}

export default ImageWithCaption;
