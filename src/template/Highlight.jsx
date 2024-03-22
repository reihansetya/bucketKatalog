import promoImg from "/assets/img/promo.png";
import tnc from "/assets/img/tnc.png";
import ButtonHighlight from "../component/ButtonHighlight";

function Highlight() {
  const data = [
    {
      text: "Promo",
      img: promoImg,
      to: "/promo",
    },
    {
      text: "Terms and Conditions",
      img: tnc,
      to: "#",
      "data-bs-toggle": "modal",
      "data-bs-target": "#tnc",
    },
  ];

  const highlightStyle = {
    width: "100%",
    height: "250px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: "30px",
  };

  return (
    <>
      <div className="container pt-5 pb-5 d-md-flex gap-1">
        {data.map((data, index) => (
          <div
            key={index}
            className="bg-success mb-3 d-flex align-items-center"
            style={{
              ...highlightStyle,
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${data.img})`,
            }}
          >
            <ButtonHighlight {...data} />
          </div>
        ))}
      </div>

      <div
        className="modal fade"
        id="tnc"
        tabIndex="-1"
        aria-labelledby="tncLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="tncLabel">
                Terms and Condition
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ol>
                <li>
                  Customer dapat mengambil sendiri pesanan ke workshop kami
                  dengan melakukan konfirmasi melalui WA
                </li>
                <li>
                  Foto di catalog hanya contoh dan memiliki kemiripan sampai
                  dengan 90% karena faktor cahaya dan warna jenis wrap (kertas
                  pembungkus) bisa saja berbeda.
                </li>
                <li>
                  Kami pihak florist pasti memberikan yang terbaik dan
                  memaksimalkan kemampuan kami dalam merangkai
                </li>
                <li>
                  Customer dapat melakukan request bucket sesuai keinginan
                  dengan melakukan konfirmasi melalui WA
                </li>
                <li>
                  Pengiriman dilakukan menggunakan kurir instant ataupun
                  sameday, bisa saja terjadi lebih cepat atau mengalami
                  keterlambatan dari waktu estimasi. Customer diharapkan untuk
                  stand by pada hp untuk memudahkan kurir berkomunikasi
                </li>
              </ol>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Highlight;
