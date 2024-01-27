import React from "react";
import Button from "../components/Button";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer pic"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <div className="flex flex-col flex-1 ">
        <h2 className="font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
          <span className=" text-coral-red"> Special </span>
          Offer
        </h2>
        <p className=" mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparraleled value that sets us apart.
        </p>
        <p className=" mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

        <div className=" mt-6 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight}></Button>
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-black"
            textColor="text-slate-gray"
          ></Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
