import React, { useState } from 'react';

export function Image() {
  const [images, setImages] = useState([]);


  const handleAddImage = () => {
    setImages((prevImages) => [
      ...prevImages,
      {
        id: Date.now(),
        src: 'img/dubai.jpg',
        width: 300,
        height: 200,
      },
    ]);
  };

  const handleScaleLastImage = () => {
    setImages((prevImages) => {
      const updatedImages = [...prevImages];
      if (updatedImages.length > 0) {
        const lastImage = updatedImages[updatedImages.length - 1];
        lastImage.width += 20;
        lastImage.height += 20;
      }
      return updatedImages;
    });
  };


  const handleReduceLastImage = () => {
    setImages((prevImages) => {
      const updatedImages = [...prevImages];
      if (updatedImages.length > 0) {
        const lastImage = updatedImages[updatedImages.length - 1];
        lastImage.width = Math.max(20, lastImage.width - 20);
        lastImage.height = Math.max(20, lastImage.height - 20);
      }
      return updatedImages;
    });
  };

  const handleDeleteLastImage = () => {
    setImages((prevImages) => prevImages.slice(0, -1));
  };

  return (
    <>
      <div id="image-box" className="image-box">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt="Dubai"
            style={{
              width: `${image.width}px`,
              height: `${image.height}px`,
              marginRight: '10px', // Отступы между изображениями
            }}
          />
        ))}
      </div>
      <button type="button" id="add" onClick={handleAddImage}>
        додати
      </button>
      <button type="button" id="scale" onClick={handleScaleLastImage}>
        збільшити
      </button>
      <button type="button" id="reduce" onClick={handleReduceLastImage}>
        зменшити
      </button>
      <button type="button" id="dell" onClick={handleDeleteLastImage}>
        видалити
      </button>
    </>
  );
}
