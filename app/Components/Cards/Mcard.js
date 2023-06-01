import React from "react";
import Image from "next/image";
function Mcard(props) {
  return (
    <div className=" cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
      {/* left */}
      <div className="relative h-80 w-80">
        <Image src={props.img} alt="mcard" fill className="rounded-xl" />
      </div>
      {/* right */}
      <div>
        <h3 className="text-2xl mt-3">{props.title}</h3>
      </div>
    </div>
  );
}

export default Mcard;
