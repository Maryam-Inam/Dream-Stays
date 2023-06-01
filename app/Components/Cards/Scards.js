import React from "react";
import Scard from "./Scard";
function Scards(props) {
  return (
    <section className="pt-6">
      <h2 className="text-4xl font-semibold pb-5">Explore nearby</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {props.data.map((item) => (
          <Scard
            key={item.location}
            img={item.img}
            distance={item.distance}
            location={item.location}
          />
        ))}
      </div>
    </section>
  );
}

export default Scards;
