import React from "react";
import Mcard from "./Mcard";
function Mcards(props) {
  return (
    <section className="pt-6">
      <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
      <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
        {props.data.map((item) => (
          <Mcard key={item.title} img={item.img} title={item.title} />
        ))}
      </div>
    </section>
  );
}

export default Mcards;
