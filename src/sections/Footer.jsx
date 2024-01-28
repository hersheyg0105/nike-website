import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <footer className=" max-container">
      <div className=" flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className=" flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="footer logo" width={150} height={50} />
          </a>
          <p className=" text-white mt-6 max-w-sm text-base sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            your perfect size in store. Get Rewards.
          </p>
          <div className="flex gap-5 mt-8 items-center">
            {socialMedia.map((icon, index) => (
              <div className=" bg-white flex w-12 h-12 justify-center items-center rounded-full">
                <img src={icon.src} alt="icons" width={30} />
              </div>
            ))}
          </div>
        </div>

        <div className=" flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section, index) => (
            <div key={section} className="text-white">
              <h4 className=" font-montserrat text-2xl font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link, index) => (
                  <li
                    key={link.name}
                    className=" my-2 font-montserrat text-base hover:text-slate-gray cursor-pointer"
                  >
                    <a href="">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className=" flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className=" flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="Nike Copyright"
            width={20}
            heigh={20}
            className=" rounded-full m-0"
          />
          <p>Copyright. All rights reserved</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms and Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
