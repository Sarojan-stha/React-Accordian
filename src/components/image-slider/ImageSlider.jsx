import React from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./imageSlider.css";
import { useState, useEffect } from "react";
import { HiQrCode } from "react-icons/hi2";
const ImageSlider = ({ url, limit = 5 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    async function fetchImages(url) {
      const response = await fetch(`${url}?page=1&limit=${limit}`);
      const data = await response.json();
      setImages(data);
    }
    fetchImages(url);
  }, []);

  const prevSlide = (currentSlide) =>
    setCurrentSlide(currentSlide === 0 ? limit - 1 : currentSlide - 1);

  const nextSlide = (currentSlide) =>
    setCurrentSlide(currentSlide === limit - 1 ? 0 : currentSlide + 1);

  console.log(currentSlide);

  return (
    <>
      <div className="wrapper">
        <h1>IMAGE SLIDER</h1>

        <div className="image-container">
          <BsArrowLeftCircleFill
            className="left-arrow"
            onClick={() => prevSlide(currentSlide)}
          />
          {images && images.length > 0
            ? images.map((imageItem, index) => {
                return (
                  <>
                    <img
                      className={
                        currentSlide === index ? "show-image" : "hide-image"
                      }
                      src={imageItem.download_url}
                      alt="image"
                    />
                    {console.log(imageItem.download_url)}
                  </>
                );
              })
            : null}
          <BsArrowRightCircleFill
            className="right-arrow"
            onClick={() => nextSlide(currentSlide)}
          />
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
