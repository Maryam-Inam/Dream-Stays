import React from "react";
import Image from "next/image";
function Scard(props) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      {/* left */}
      <div className="relative h-16 w-16">
        <Image src={props.img} alt="scard" fill className="rounded-lg" />
      </div>
      {/* right */}
      <div>
        <h2>{props.location}</h2>
        <h3>{props.distance}</h3>
      </div>
    </div>
  );
}

export default Scard;
