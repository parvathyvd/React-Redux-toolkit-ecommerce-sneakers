import images from "./Data";

import next from "../images/icon-next.svg";
import previous from "../images/icon-previous.svg";

const BackDrop = ({
  closeLightBox,
  mainImage,
  setMainImage,
  selectedImageIndex,
  setSelectedImageIndex,
}) => {
  const onClickThumb = (index) => {
    console.log("index is", index);
    setSelectedImageIndex(index);
    setMainImage(images[index].mainImage);
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
    <div className="backdrop">
      <div className="modal">
        <div id="main-img-wrapper">
          <img className="backdrop-main-img" src={mainImage} alt="shoes" />
          <div className="close" onClick={closeLightBox}>
            <svg width="17" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#fff"
                fillRule="evenodd"
              />
            </svg>
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
        <div className="modal-thumbnails">
          {images.map((img, index) => {
            return (
              <div
                className={`thumb-block ${
                  selectedImageIndex === index ? "selected" : ""
                }`}
              >
                <img
                  className="thumb"
                  key={img.id}
                  src={img.thumbImage}
                  alt="shoes"
                  onClick={() => onClickThumb(index)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BackDrop;
