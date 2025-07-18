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
import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "@/../public/assets/svgs/left-arrow.svg";
import RightArrow from "@/../public/assets/svgs/right-arrow.svg";

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

  const [current, setCurrent] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    beforeChange: (current: number, next: number) => setCurrent(next),
  };

  const getIndex = (idx: number) =>
    (idx + Testimonials.length) % Testimonials.length;
  const prevIdx = getIndex(current - 1);
  const nextIdx = getIndex(current + 1);

  const n = Testimonials.length;
  const tripled = [...Testimonials, ...Testimonials, ...Testimonials];
  const centerIdx = n + current;

  return (
    <div className="wrapper">
      <h2 className="section-heading mt-10 opacity-90">Testimonials</h2>
      <div className="pic-slider-outer">
        <div
          className="pic-slider-inner pic-container"
          style={{
            transform: `translateX(calc(50% - ${(centerIdx + 0.5) * 80}px))`,
            transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
            display: "flex",
            gap: "20px",
          }}
        >
          {tripled.map((item, idx) => (
            <div
              key={idx}
              className={`per-pic-container `}
              onClick={() => sliderRef.current?.slickGoTo(idx % n)}
              style={{ cursor: "pointer" }}
            >
              <div className="custom-border"></div>
              <div className="custom-border-last"></div>
              <Image
                className="rounded-full relative z-10"
                src={item.img}
                alt={`${item.name} pic`}
                height={60}
                width={60}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 w-full">
        <Slider
          ref={sliderRef}
          {...settings}
          className="testimonial-slick-slider"
        >
          {Testimonials.map((item, index) => {
            let cardType = "";
            if (index === current) cardType = "center";
            else if (index === prevIdx) cardType = "left";
            else if (index === nextIdx) cardType = "right";

            const isClickable = cardType === "left" || cardType === "right";
            return (
              <div
                key={index}
                className={`testimonials-container slick-slide-custom ${
                  index === current
                    ? "slick-center-custom"
                    : "slick-side-custom"
                }`}
                onClick={
                  isClickable
                    ? () => sliderRef.current?.slickGoTo(index)
                    : undefined
                }
                style={{ cursor: isClickable ? "pointer" : "default" }}
              >
                <h3 className="section-heading">{item.tag}</h3>
                <p className="mt-5 font-normal text-xl">{item.des}</p>
                <div className="flex mt-[30px] items-center gap-3">
                  <Image
                    className="rounded-full"
                    src={item.img}
                    alt={`${item.name} pic`}
                    height={77}
                    width={77}
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
            );
          })}
        </Slider>
        <div className="w-full flex items-center justify-center mt-8 gap-[10px]">
          <Image
            src={LeftArrow}
            alt="left arrow svg"
            height={40}
            width={40}
            style={{ cursor: "pointer" }}
            onClick={() => sliderRef.current?.slickPrev()}
          />
          <div
            className="h-[1px] gray flex justify-start items-center"
            style={{ width: 229 }}
          >
            <div
              className="h-0.5 foreground opacity-80 transition-all ease-in-out duration-300"
              style={{
                width: `${((current + 1) / Testimonials.length) * 229}px`,
              }}
            ></div>
          </div>
          <Image
            src={RightArrow}
            alt="right arrow svg"
            height={40}
            width={40}
            style={{ cursor: "pointer" }}
            onClick={() => sliderRef.current?.slickNext()}
          />
        </div>
      </div>
    </div>
  );
}
