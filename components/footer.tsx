import React from "react";
import BorderMagic from "./ui/border-magic";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] md:mb-5 pb-10" id="contact">
      <div className="w-full absolute bottom-0">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-4xl md:text-4xl text-center lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> diigtal
          presence to a next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          React out to me today and let&apos;s discuss how I can help you
          achieve your goals
        </p>
        <a href="mailto:devansh.pant02@gmail.com">
          <BorderMagic
            title="Let's get in touch"
            position="right"
            icon={<FaLocationArrow />}
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-y-2">
        <p className="md:text-base text-xs md:font-normal font-light">
          Copyright © 2024 Devansh
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map(({ id, img }) => (
            <div
              key={id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border-black-300"
            >
              <img src={img} alt={img} width={20} height={20}></img>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
