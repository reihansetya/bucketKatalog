import { useParams, useLocation } from "react-router-dom";
import CardProduct from "../component/CardProduct";
import ButtonProduct from "../component/ButtonProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState } from "react";

function DetailProduct() {
  let { id } = useParams();
  const { state } = useLocation(); // get data from product
  const { item } = state || {}; // <-- unpack the item from state
  const [currentImg, setCurrentImg] = useState(0);
  const [size, setSize] = useState(item.price);

  const snack = item.category === "snack";
  // Pengecekan sebelum mencoba mengakses properti 'img'
  return (
    <div className="container container-detail-product pt-5 pb-5">
      <Link to={`/product`} className="text-decoration-none">
        <div className="d-flex align-items-center">
          <FontAwesomeIcon
            icon="fa-solid fa-arrow-left"
            style={{ color: "#769FCD" }}
          />
          <span className="ms-2" style={{ color: "#769FCD" }}>
            Back
          </span>
        </div>
      </Link>
      <h2 className="text-center">Detail Product</h2>
      <h3 className="mt-5 mt-md-0 d-block d-md-none text-center">
        {item.description}
      </h3>
      <p className="fw-normal d-block d-md-none text-center">
        Category: {item.category}
      </p>
      {item && (
        <>
          <div className="row pt-3 justify-content-around">
            <div className="col-md-4 text-center align-content-end">
              <img
                width={300}
                height={400}
                style={{ objectFit: "contain" }}
                src={`/assets/img/product/${item.img[currentImg]}`}
                alt=""
              />
              <div className="d-flex pt-3 gap-3 overflow-auto">
                {item.img.map((img, index) => (
                  <img
                    key={index}
                    width={100}
                    height={125}
                    src={`/assets/img/product/${img}`}
                    alt=""
                    onClick={() => setCurrentImg(index)}
                    style={{ cursor: "pointer" }}
                  />
                ))}
              </div>
            </div>
            <div className="col-md-6 text-center text-md-start d-flex flex-column">
              <h4 className="mt-5 mt-md-0 d-none d-md-block">
                {item.description}
              </h4>
              <p className="fw-normal pb-5 d-none d-md-block">
                Category: {item.category}
              </p>
              {snack && (
                <label className="pt-3">
                  Pilih Ukuran:
                  <select
                    className="ms-2 form-select-sm"
                    name="selectSize"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                  >
                    <option value={item.price}>S</option>
                    <option value={200000}>M</option>
                    <option value={300000}>L</option>
                  </select>
                </label>
              )}
              <h4 className="pb-3">Rp.{size}</h4>
              {/* <p>{item.price}</p> */}
              <ButtonProduct
                className="w-25 mx-auto mx-md-0"
                target={"_blank"}
                to={`https://api.whatsapp.com/send/?phone=6285156893702&text=Order+list+%0ANama%3A+%0ANo.telp%3A+%0AJenis+bucket+%3A+%0AWarna+wrapping+%3A+%0AUcapan%3A+%0A%0A%0AForm+pengiriman%3A%0AMetode+%3Aambil+langsung%2FCoD%2Freguler%2Finstant%2Fsameday%0ANama+penerima+%3A%0ANo+telp+penerima+%3A%0AAlamat+lengkap+penerima+%3A%0A%0ALocation+%3A+https%3A%2F%2Fg.co%2Fkgs%2FkLccXDB&type=phone_number&app_absent=0`}
                text={"Order Here!!"}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default DetailProduct;
