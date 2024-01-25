import React from "react";
import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section className=" max-container flex justify-center align-middle flex-wrap gap-6">
      {services.map((service, index) => (
        <ServiceCard key={service.label} {...service}></ServiceCard>
      ))}
    </section>
  );
};

export default Services;
