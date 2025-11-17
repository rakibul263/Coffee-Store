import React, { useState } from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";
import Hero from "./Hero";
import ImageCard from "./ImageCard";

const Home = () => {
  const data = useLoaderData();
  const [coffees, setCoffees] = useState(data);

  return (
    <div>
      <Hero></Hero>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-40 max-w-7xl mx-auto">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
      <ImageCard></ImageCard>
    </div>
  );
};

export default Home;
