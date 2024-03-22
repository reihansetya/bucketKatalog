/* eslint-disable react/prop-types */
function CardHero(props) {
  return (
    <>
      <div className="card m-2">
        <img
          src={props.img}
          style={{ width: "150px" }}
          className="card-img-top"
          alt={props.img}
        />
      </div>
    </>
  );
}

export default CardHero;
