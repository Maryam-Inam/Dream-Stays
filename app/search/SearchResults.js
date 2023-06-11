"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { format } from "date-fns";
import InfoCard from "../Components/Cards/InfoCard";

function SearchResults({ results }) {
  console.log(results);
  const searchParams = useSearchParams();
  const queryParams = Object.fromEntries(searchParams.entries());
  const { location, startDate, endDate, noOfGuests } = queryParams;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  const GType = noOfGuests > 1 ? "guests" : "guest";

  //   useEffect(() => {
  //     if (props.fillData && typeof props.fillData === "function") {
  //       props.fillData(queryParams);
  //     }
  //   }, [fillData, queryParams]);

  return (
    <div>
      <Header placeHolder={`${location} | ${range} | ${noOfGuests} ${GType}`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ stays - {range} - for {noOfGuests} number of {GType}
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex space-x-3 mb-5 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>

          {/* Showing results */}
          <div className="flex flex-col">
            {results.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={title}
                  img={img}
                  location={location}
                  description={description}
                  star={star}
                  price={price}
                  title={title}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default SearchResults;
