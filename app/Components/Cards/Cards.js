import React from "react";
import Scards from "./Scards";
import Mcards from "./Mcards";
import Lcard from "./Lcard";
function Cards(props) {
  return (
    <main className="max-w-7xl mx-auto px-8 sm:px-16">
      <Scards data={props.sdata} />
      <Mcards data={props.mdata} />
      <Lcard
        img="https://links.papareact.com/4cj"
        title="The Greatest Outdoors"
        description="Wishlists created by airbnb"
        buttonText="Get Inspired"
      />
    </main>
  );
}

export default Cards;
