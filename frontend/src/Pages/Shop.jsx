import React, { useRef } from "react";
import { Hero } from "../Components/Hero/Hero";
import { Popular } from "../Components/Popular/Popular";
import { Offers } from "../Components/Offers/Offers";
import { NewArrivals } from "../Components/NewArrivals/NewArrivals";
import { NewsLetter } from "../Components/NewsLetter/NewsLetter";

export const Shop = () => {
  const newArrivalsRef = useRef(null);

  return (
    <div>
      <Hero newArrivalsRef={newArrivalsRef} />
      <Popular />
      <Offers />
      <NewArrivals ref={newArrivalsRef} />
      <NewsLetter />
    </div>
  );
};
