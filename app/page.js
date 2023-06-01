import Banner from "./Components/Banner";
import Header from "./Components/Header";
import Cards from "./Components/Cards/Cards";
import Footer from "./Components/Footer";
export default async function Home() {
  const data = await getData();
  console.log("here it is");
  console.log(data);
  return (
    <div>
      <Header />
      <Banner />
      <Cards sdata={data.sData} mdata={data.mData} />
      <Footer />
    </div>
  );
}

async function getData() {
  try {
    const response = await fetch("https://www.jsonkeeper.com/b/4G1G");
    const sData = await response.json();
    const mData = await fetch("https://www.jsonkeeper.com/b/VHHT").then((res) =>
      res.json()
    );
    return { sData, mData };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
