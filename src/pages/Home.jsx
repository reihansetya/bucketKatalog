import React from "react";

import Hero from "../template/Hero";
import SectionP from "../template/SectionP";
import Highlight from "../template/Highlight";
import CardProduct from "../component/CardProduct";
import { Loading } from "../component/Loading";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Home() {
  const [bestSeller, setbestSeller] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      AOS.init();
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://backend-bucket-api.vercel.app/api/data`
        ); // Adjust the path as needed
        console.log(response);
        const data = await response.json();
        const best = data.filter((item) => item.category === "best-seller");
        setbestSeller(best);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Hero aos="fade-left" />
      <SectionP aos="fade-right" />
      <Highlight />
      <div className="container pb-5 " data-aos="fade-up">
        <div className="row">
          <h1 className="text-center mb-3">Best Seller</h1>
          {isLoading ? (
            <Loading />
          ) : (
            bestSeller.map((item) => (
              <div key={item._id} className="col-md-4 mt-3">
                <CardProduct
                  state={{ item }}
                  key={item._id}
                  id={item._id}
                  img={`/assets/img/${item.img[0]}`}
                  description={item.description}
                  price={item.price}
                  category={item.category}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
