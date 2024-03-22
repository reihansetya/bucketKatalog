import CardProduct from "../component/CardProduct";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../component/Loading";
import axios from "axios";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import ButtonProduct from "../component/ButtonProduct";
function Product() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    AOS.init();

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://backend-bucket-api.vercel.app/api/data"
        );
        setProducts(response.data);
        setIsLoading(false);

        // Cari kategori unik
        const uniqueCategories = [
          ...new Set(response.data.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = activeCategory
    ? products.filter((product) => product.category === activeCategory)
    : [];

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="container pb-5">
      <h1 className="text-center mb-3">Product</h1>
      <div className="row">
        <div className="d-flex gap-3 overflow-x-scroll">
          {/* Tombol untuk memilih kategori */}
          {categories.map((category) => (
            <ButtonProduct
              className="text-sm font-bold text-capitalize fs-6"
              key={category}
              onClick={() => handleCategorySelect(category)}
              text={category}
            />
          ))}
        </div>

        {isLoading ? (
          <Loading />
        ) : (
          <>
            {filteredProducts.map((item) => (
              <div
                data-aos="fade-up"
                key={item._id}
                className="col-md-3 p-0 mt-3 me-0 me-md-3"
              >
                <CardProduct
                  state={{ item }}
                  key={item._id}
                  id={item._id}
                  img={`/assets/img/product/${item.img[0]}`}
                  description={item.description}
                  price={item.price}
                  category={item.category}
                />
              </div>
            ))}
            {!filteredProducts.length && (
              <h5 className="text-center pt-5">Silahkan Pilih Category</h5>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Product;
