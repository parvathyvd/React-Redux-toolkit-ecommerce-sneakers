import React, { useState } from "react";
import images from "./Data";
import plus from "../images/icon-plus.svg";
import minus from "../images/icon-minus.svg";
import next from "../images/icon-next.svg";
import previous from "../images/icon-previous.svg";
import BackDrop from "./BackDrop";
import { increase, decrease, addToCart } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Product = () => {
  const [lightBoxOpen, setLightBoxOpen] = useState(false);
  const [mainImage, setMainImage] = useState(images[0].mainImage);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const onClickThumb = (index) => {
    console.log("index is", index);
    setSelectedImageIndex(index);
    setMainImage(images[index].mainImage);
  };
  const openLightBox = () => {
    setLightBoxOpen(true);
  };
  const closeLightBox = () => {
    setLightBoxOpen(false);
  };
  const onClickPreviousHandler = () => {
    console.log("clicked prev", selectedImageIndex);
    if (selectedImageIndex === 0) {
      setSelectedImageIndex(images.length - 1);
      setMainImage(images[images.length - 1].mainImage);
    } else {
      setSelectedImageIndex(selectedImageIndex - 1);
      setMainImage(images[selectedImageIndex - 1].mainImage);
    }
  };

  const onClickNextHandler = () => {
    // console.log("clicked next", selectedImageIndex);
    if (selectedImageIndex === images.length - 1) {
      setSelectedImageIndex(0);
      setMainImage(images[0].mainImage);
    } else {
      setSelectedImageIndex(selectedImageIndex + 1);
      setMainImage(images[selectedImageIndex + 1].mainImage);
    }
  };

  return (
    <>
      <div className="product">
        <div className="img-container">
          <div
            className="main-img"
            id="main-img-wrapper"
            onClick={openLightBox}
          >
            <img src={mainImage} alt="shoes" />
          </div>
          <div className="thumbnails">
            {images.map((img, index) => {
              return (
                <div
                  key={img.id}
                  className={`thumb-main ${
                    selectedImageIndex === index ? "selected" : ""
                  }`}
                >
                  <img
                    src={img.thumbImage}
                    alt="shoes"
                    onClick={() => onClickThumb(index)}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="img-container-mb">
          <div className="main-img" id="main-img-wrapper">
            <img src={mainImage} alt="shoes" />
          </div>
          <div className="previous-wrapper" onClick={onClickPreviousHandler}>
            <img className="previous" src={previous} alt="previous" />
          </div>
          <div className="next-wrapper">
            <img
              className="next"
              src={next}
              alt="next"
              onClick={onClickNextHandler}
            />
          </div>
        </div>
        <div className="description">
          <h3 className="small-lead">Sneaker Company</h3>
          <h1 className="lead">Fall Limited Edition Sneakers</h1>
          <p className="desc-text">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="price-percent">
            <div className="price-first">
              <span className="price">$125.00</span>
              <span className="percent">50%</span>
            </div>
            <div className="cut">
              <span className="cut-price">$250.00</span>
            </div>
          </div>
          <div className="btn-block">
            <div className="btn-quantity">
              <button className="decrease" onClick={() => dispatch(decrease())}>
                <img src={minus} alt="minus" />
              </button>
              <span className="num">{amount}</span>
              <button className="increase" onClick={() => dispatch(increase())}>
                <img src={plus} alt="minus" />
              </button>
            </div>
            <button className="add-cart" onClick={() => dispatch(addToCart())}>
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#fff"
                  fillRule="nonzero"
                />
              </svg>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {lightBoxOpen && (
        <BackDrop
          closeLightBox={closeLightBox}
          mainImage={mainImage}
          setMainImage={setMainImage}
          selectedImageIndex={selectedImageIndex}
          setSelectedImageIndex={setSelectedImageIndex}
        />
      )}
    </>
  );
};

export default Product;
