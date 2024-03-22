import { useMediaQuery } from "react-responsive";
import ButtonProduct from "./ButtonProduct";
import { useState } from "react";

function CardProduct({ img, description, state, id, price, clickImg }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 875px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 875px)" });
  return (
    <div
      className={isDesktopOrLaptop ? "card" : "card w-75 mx-auto"}
      style={{ background: "#D8EEFE" }}
    >
      <img
        src={img}
        width={isDesktopOrLaptop ? 200 : 150}
        // height={isDesktopOrLaptop ? 375 : 350}
        className="card-img-top object-object-fit-cover"
        alt={description}
      />
      <div className="card-body">
        <p className="card-text">{description}</p>
        <small className="card-text">{price}</small>
        <div className="text-end">
          <ButtonProduct state={state} text={"Detail"} to={`/product/${id}`} />
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
