import React from "react";
import SearchResults from "./SearchResults";
export default async function Page() {
  let searchResults;
  try {
    searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
      (res) => res.json()
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }

  return (
    <div>
      <SearchResults results={searchResults} />;
    </div>
  );
}
