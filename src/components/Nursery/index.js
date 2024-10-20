/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const NurseryList = [
  {
    id: 1,
    imgUrl: "http://surl.li/zxzlqa",
    describe: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum ",
  },
  {
    id: 2,
    imgUrl: "http://surl.li/hhitpy",
    describe: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum ",
  },
  {
    id: 3,
    imgUrl: "http://surl.li/hftgjw",
    describe: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum ",
  },
  {
    id: 4,
    imgUrl: "http://surl.li/hhitpy",
    describe: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum ",
  },
  {
    id: 5,
    imgUrl: "http://surl.li/tlsfzp",
    describe: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum ",
  },
  {
    id: 6,
    imgUrl: "http://surl.li/zxzlqa",
    describe: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum ",
  },
  {
    id: 7,
    imgUrl: "http://surl.li/zxzlqa",
    describe: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum ",
  },
  {
    id: 8,
    imgUrl: "http://surl.li/hftgjw",
    describe: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum ",
  },
  {
    id: 9,
    imgUrl: "http://surl.li/hhitpy",
    describe: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum ",
  },
  {
    id: 10,
    imgUrl: "http://surl.li/tlsfzp",
    describe: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum ",
  },
  {
    id: 11,
    imgUrl: "http://surl.li/zxzlqa",
    describe: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum ",
  },
  {
    id: 12,
    imgUrl: "http://surl.li/zxzlqa",
    describe: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum ",
  },
  {
    id: 13,
    imgUrl: "http://surl.li/hftgjw",
    describe: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum ",
  },
  {
    id: 14,
    imgUrl: "http://surl.li/hhitpy",
    describe: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum ",
  },
  {
    id: 15,
    imgUrl: "http://surl.li/tlsfzp",
    describe: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum ",
  },
];

export default function Nursery() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  return (
    <Slider {...settings} className="nurseryContainer">
      {NurseryList.map((each) => (
        <div className="eachNurseryItem">
          <img className="nurseryImg" src={each.imgUrl} />
          <p className="nurseryPara">{each.describe}</p>
        </div>
      ))}
    </Slider>
  );
}
