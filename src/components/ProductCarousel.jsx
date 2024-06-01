import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowNext from "../assets/sliderRIght.svg";
import ArrowPrev from "../assets/sliderLeft.svg";

const diamondShapes = [
  {
    title: "Round",
    img: "https://www.caratlane.com/skin/frontend/shopper/default/images/diamonds/Round.jpg",
  },
  {
    title: "Pear",
    img: "https://www.caratlane.com/skin/frontend/shopper/default/images/diamonds/Pear.jpg",
  },
  {
    title: "Emerald",
    img: "https://www.caratlane.com/skin/frontend/shopper/default/images/diamonds/Emerald.jpg",
  },
  {
    title: "Oval",
    img: "https://www.caratlane.com/skin/frontend/shopper/default/images/diamonds/Oval.jpg",
  },
  {
    title: "Heart",
    img: "https://www.caratlane.com/skin/frontend/shopper/default/images/diamonds/Heart.jpg",
  },
  {
    title: "Marquise",
    img: "https://www.caratlane.com/skin/frontend/shopper/default/images/diamonds/Marquise.jpg",
  },
];

const ProductCarousel = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        // aria-hidden="true"
        // aria-disabled={currentSlide === 0 ? true : false}
        // type="button"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <img src={arrowNext} height={30} />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      >
        <img src={ArrowPrev} height={30} />
        </div>
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7 ,
    slidesToScroll: 1,
    className: "myCustomCarousel",
    centerMode: true,
    // arrows:false,
    // swipeToSlide: true,
    // focusOnSelect: true,
    draggable: true,
    // dots:true
    responsive:[
      {
        breakpoint: 1024,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }
    ]
  };
  return (
    <>
      <div className="relative">
        <div className="flex justify-between mx-auto max-w-[1420px] px-[20px]">
          <div style={{ fontFamily: "Roxie Rossa" , fontSize:"30px" }}>Diamonds</div>
        </div>
        <Slider
          {...settings}
          nextArrow={<SampleNextArrow />}
          prevArrow={<SamplePrevArrow />}
        >
          {diamondShapes.map((data, index) => {
            return (
              <div key={index}>
                <div className="max-w-[178px] h-[282px] bg-white rounded-full flex justify-center items-center">
                  <div className="p-4 text-center">
                    <img
                      src={data.img}
                      className="removeBg scale-75 hover:scale-100 duration-150"
                    />
                    <h1>{data.title}</h1>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <style jsx>
        {`
          .myCustomCarousel .slick-arrow {
            color: white !important;
            border: none;
            outline: none;
            height: 30px;
            width: 30px;
            border-radius: 50%;
          }
          .slick-prev {
            right: 9% !important;
            z-index: 1;
            top: -18px;
            left:unset
          }
          .slick-prev:before {
            content:""
          }
          .slick-next:before {
            content:""
          }
          .slick-next {
            right: 5% !important;
            z-index: 1;
            top: -18px;
          }

          .slick-track{
            padding-top:20px;
          }
        `}
      </style>
    </>
  );
};

export default ProductCarousel;
