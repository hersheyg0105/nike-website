import React from "react";

const Button = ({ label, iconURL }) => {
  return (
    <button className=" flex justify-center items-center gap-1 px-7 py-4 m-4 font-montserrat text-lg leading-none border rounded-full text-white bg-coral-red border-coral-red">
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className=" ml-3 rounded-full"
          w-5
          h-5
        />
      )}
    </button>
  );
};

export default Button;
