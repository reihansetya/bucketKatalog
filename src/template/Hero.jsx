import ButtonProduct from "../component/ButtonProduct";
import CardHero from "../component/CardHero";
import imgHero from "/assets/img/foto-hero.avif";

function Hero(props) {
  const heroText = (
    <>
      <h3 className="fs-1">Katalog</h3>
      <h3 className="fs-1">Bucket by Lisa</h3>
    </>
  );

  return (
    <section className="hero bg-body-secondary p-3" data-aos={props.aos}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex h-100 flex-column">
              <div className="hero-text d-none d-md-block">{heroText}</div>
              <div className="hero-text d-md-none text-center">{heroText}</div>
              <ButtonProduct
                to="/product"
                text="Katalog Produk"
                style={{ marginTop: "auto", width: "10rem" }}
                className={`d-none d-md-block`}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex p-2">
              {[1, 2].map((key) => (
                <CardHero key={key} img={imgHero} />
              ))}
            </div>
            <div className="d-none d-md-block d-md-flex p-2">
              {[1, 2].map((key) => (
                <CardHero key={key} img={imgHero} />
              ))}
            </div>
          </div>
          <ButtonProduct
            to="/product"
            text="Katalog Produk"
            style={{ marginTop: "auto", width: "10rem" }}
            className={`d-md-none m-auto`}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
