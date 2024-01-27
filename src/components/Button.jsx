import React from "react";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
}) => {
  console.log(backgroundColor, borderColor, textColor);

  return (
    <button
      className={` flex justify-center items-center gap-1 px-7 py-4 m-4 font-montserrat text-lg leading-none 
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : " text-white bg-coral-red border-coral-red"
        } rounded-full w-full"}`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className=" ml-3 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
