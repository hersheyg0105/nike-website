import React from "react";
import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className=" max-container">
      <h3 className=" text-4xl font-palanquin text-center font-bold">
        What Our
        <span className=" text-coral-red "> Customers </span>
        Say
      </h3>
      <p className=" info-text m-auto mt-6 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className=" mt-20 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <ReviewCard key={review.customerName} {...review}></ReviewCard>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
