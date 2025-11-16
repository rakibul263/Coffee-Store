import React from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {data.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
