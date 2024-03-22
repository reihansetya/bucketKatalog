/* eslint-disable react/prop-types */
function CardSectionP(props) {
  return (
    <>
      <div className="d-flex flex-column">
        <img src={props.img} alt="" width={100} className="mx-auto mb-2" />
        <p className="text-center">{props.text}</p>
      </div>
    </>
  );
}

export default CardSectionP;
