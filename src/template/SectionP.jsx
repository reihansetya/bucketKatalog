import CardSectionP from "../component/CardSectionP";

import cod from "/assets/img/cod.png";
import delivery from "/assets/img/delivery.png";
import oneDay from "/assets/img/one-day.png";
import request from "/assets/img/request.png";

function SectionP(props) {
  const sectionData = [
    {
      text: "COD untuk didaerah tangsel dan ciledug",
      img: cod,
    },
    {
      text: "Delivery menggunakan Instant/sameday/Reguler",
      img: delivery,
    },
    {
      text: "Pengerjaan 1 hari jadi",
      img: oneDay,
    },
    {
      text: "Bisa dipesan berdasarkan request",
      img: request,
    },
  ];

  return (
    <div className="container pt-5" data-aos={props.aos}>
      <div className="row">
        {sectionData.map((data, index) => (
          <div className="col-md-3" key={index}>
            <CardSectionP text={data.text} img={data.img} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionP;
