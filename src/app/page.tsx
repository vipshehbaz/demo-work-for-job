"use client";
import Image from "next/image";
import JhonPic from "@/../public/assets/person-images/john.jpg";
import EmmaPic from "@/../public/assets/person-images/Emma.jpg";
import SophiaPic from "@/../public/assets/person-images/Sophia.jpg";
import AhmedPic from "@/../public/assets/person-images/ahmed.jpg";
import AnilPic from "@/../public/assets/person-images/anil.jpg";
import ArshadPic from "@/../public/assets/person-images/arshad.jpg";
import LoenPic from "@/../public/assets/person-images/loen.jpg";
import SalmanPic from "@/../public/assets/person-images/salman-pic.jpg";
import SaraPic from "@/../public/assets/person-images/sara-pic.jpg";
import SarthakPic from "@/../public/assets/person-images/sarthak.jpg";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const Testimonials = [
    {
      name: "Jhon",
      img: JhonPic,
      tag: "“Adjective”",
      des: (
        <>
          Lorem ipsum dolor sit amet <b>consectetur</b>. A viverra massa
          molestie <b>velit et eu.</b>
        </>
      ),
    },
    {
      name: "Emma",
      img: EmmaPic,
      tag: "“Adjective”",
      des: (
        <>
          Lorem ipsum dolor sit amet <b>consectetur</b>. A viverra massa
          molestie <b>velit et eu.</b>
        </>
      ),
    },
    {
      name: "Sophia",
      img: SophiaPic,
      tag: "“Adjective”",
      des: (
        <>
          Lorem ipsum dolor sit amet <b>consectetur</b>. A viverra massa
          molestie <b>velit et eu.</b>
        </>
      ),
    },
    {
      name: "Ahmed",
      img: AhmedPic,
      tag: "“Adjective”",
      des: (
        <>
          Lorem ipsum dolor sit amet <b>consectetur</b>. A viverra massa
          molestie <b>velit et eu.</b>
        </>
      ),
    },
    {
      name: "Anil",
      img: AnilPic,
      tag: "“Adjective”",
      des: (
        <>
          Lorem ipsum dolor sit amet <b>consectetur</b>. A viverra massa
          molestie <b>velit et eu.</b>
        </>
      ),
    },
    {
      name: "Arshad",
      img: ArshadPic,
      tag: "“Adjective”",
      des: (
        <>
          Lorem ipsum dolor sit amet <b>consectetur</b>. A viverra massa
          molestie <b>velit et eu.</b>
        </>
      ),
    },
    {
      name: "Loen",
      img: LoenPic,
      tag: "“Adjective”",
      des: (
        <>
          Lorem ipsum dolor sit amet <b>consectetur</b>. A viverra massa
          molestie <b>velit et eu.</b>
        </>
      ),
    },
    {
      name: "Salman",
      img: SalmanPic,
      tag: "“Adjective”",
      des: (
        <>
          Lorem ipsum dolor sit amet <b>consectetur</b>. A viverra massa
          molestie <b>velit et eu.</b>
        </>
      ),
    },
    {
      name: "Sara",
      img: SaraPic,
      tag: "“Adjective”",
      des: (
        <>
          Lorem ipsum dolor sit amet <b>consectetur</b>. A viverra massa
          molestie <b>velit et eu.</b>
        </>
      ),
    },
    {
      name: "Sarthak",
      img: SarthakPic,
      tag: "“Adjective”",
      des: (
        <>
          Lorem ipsum dolor sit amet <b>consectetur</b>. A viverra massa
          molestie <b>velit et eu.</b>
        </>
      ),
    },
  ];

  // Slider settings for react-slick
  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    infinite: true,
    arrows: true,
    speed: 500,
    nextArrow: <SampleNextArrow />, // Custom arrow components if needed
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    // Custom class for active/center slide
    beforeChange: (current: number, next: number) => setCurrent(next),
  };

  const [current, setCurrent] = useState(0);

  // Custom arrow components (optional, can use default)
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", right: -30, zIndex: 2 }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", left: -30, zIndex: 2 }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className="wrapper">
      <h2 className="section-heading mt-10 opacity-90">Testimonials</h2>
      <div className="pic-container">
        {[...Testimonials, ...Testimonials].map((item, index) => (
          <div key={index} className="per-pic-container">
            <div className="custom-border"></div>
            <div className="custom-border-last"></div>
            <Image
              className="rounded-full relative z-10"
              src={item.img}
              alt={`${item.name} pic`}
              height={100}
              width={100}
            />
          </div>
        ))}
      </div>
      <div className="mt-8 w-full">
        <Slider {...settings} className="testimonial-slick-slider">
          {Testimonials.map((item, index) => (
            <div
              key={index}
              className={`testimonials-container slick-slide-custom ${
                index === current ? "slick-center-custom" : "slick-side-custom"
              }`}
            >
              <h3 className="section-heading">{item.tag}</h3>
              <p className="mt-5 font-normal text-xl">{item.des}</p>
              <div className="flex mt-[30px] items-center gap-3">
                <Image
                  className="rounded-full"
                  src={item.img}
                  alt={`${item.name} pic`}
                  height={100}
                  width={100}
                />
                <div>
                  <p className="font-semibold text-xl leading-[175%] tracking-[0%]">
                    {item.name}
                  </p>
                  <p className="font-normal text-base leading-[175%]">
                    Designation
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
