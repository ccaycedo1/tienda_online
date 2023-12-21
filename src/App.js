import logo from "./logo.svg";
import "./App.css";
import "./css/bootstrap.min.css";
import "./css/hero-slider-style.css";
import "./css/magnific-popup.css";
import "./css/tooplate-style.css";
import { catalogo } from "./components/catalogo";

function App() {
  const TitulosRaza = ({ nombre }) => {
    return <div>Raza, {nombre}</div>;
  };

  const ImagenRaza = ({ src, alt }) => {
    return <img src={src} alt={alt} />;
  };

  let titulo = "Tienda de mascotas";
  return (
    <div>
      <body>
        <div className="cd-hero">
          <div className="cd-slider-nav">
            <nav className="navbar">
              <div className="tm-navbar-bg">
                <a className="navbar-brand text-uppercase" href="#">
                  <i className="fa fa-gears tm-brand-icon"></i>
                  {titulo}
                </a>

                <button
                  className="navbar-toggler hidden-lg-up"
                  type="button"
                  data-toggle="collapse"
                  data-target="#tmNavbar"
                >
                  &#9776;
                </button>
                <div
                  className="collapse navbar-toggleable-md text-xs-center text-uppercase tm-navbar"
                  id="tmNavbar"
                >
                  <ul className="nav navbar-nav">
                    <li className="nav-item active selected">
                      <a className="nav-link" href="#0" data-no="1">
                        Selecciona la raza
                        <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#0" data-no="2">
                        Multi Two
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#0" data-no="3">
                        Multi Three
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#0" data-no="4">
                        Our Team
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#0" data-no="5">
                        Keep in touch
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>

          <ul className="cd-hero-slider">
            <li className="selected">
              <div className="cd-full-width">
                <div
                  className="container-fluid js-tm-page-content"
                  data-page-no="1"
                  data-page-type="gallery"
                >
                  <div className="tm-img-gallery-container">
                    <div className="tm-img-gallery gallery-one">
                      <div className="tm-img-gallery-info-container">
                        <h2 className="tm-text-title tm-gallery-title tm-white">
                          <span className="tm-white">
                            Escoge la raza de tu preferencia
                          </span>
                        </h2>
                        <p className="tm-text">
                          Escoge entre las diferentes opciones:
                        </p>
                      </div>
                      <div className="grid-item">
                        <figure className="effect-bubba">
                          <ImagenRaza
                            src="https://www.santevet.es/uploads/images/es_ES/razas/labradorretrieversegurosantevet.jpeg"
                            alt="Labrador"
                          />
                          <figcaption>
                            <h2 className="tm-figure-title">
                              <TitulosRaza nombre="Labrador" />
                            </h2>
                            <p className="tm-figure-description">
                              El Labrador cuenta con múltiples rasgos adorables:
                              es inteligente, es fácil de adiestrar y es un
                              excelente compañero de familia.
                            </p>
                            <a href="./img/tm-img-01.jpg">Ver mas</a>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="grid-item">
                        <figure className="effect-bubba">
                          <img
                            src="https://www.doggysmarket.com.co/wp-content/uploads/elementor/thumbs/bernes-de-la-montana-doggys-market-1-q0jcin8cg1d7xvdxmcrnxbpw7iaoh21l05hnl2f5e8.jpg"
                            alt="Image"
                            className="img-fluid tm-img"
                          />
                          <figcaption>
                            <h2 className="tm-figure-title">
                              <TitulosRaza nombre="Bernes de la montaña" />
                            </h2>
                            <p className="tm-figure-description">
                              Aunque son grandes, son perros "blandos" y no
                              reaccionan bien ante correcciones duras. El pelo
                              es grueso, largo y tiene brillo natural que
                              necesitará un cepillado diario para mantenerse
                              limpio y evitar nudos. Se recomienda asearlos al
                              menos dos veces por semana.
                            </p>
                            <a href="img/tm-img-02.jpg">View more</a>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="grid-item">
                        <figure className="effect-bubba">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/2/24/Toy_Fox_Terrier_2.jpg"
                            alt="Image"
                            className="img-fluid tm-img"
                          />
                          <figcaption>
                            <h2 className="tm-figure-title">
                              Yorkshire terrier
                            </h2>
                            <p className="tm-figure-description">
                              El Yorkshire terrier es enérgico, vivo y
                              dominante, pero también cariñoso. Se considera un
                              buen perro para un piso, aunque puede mostrarse
                              tozudo a la hora de aprender a controlar los
                              esfínteres.
                            </p>
                            <a href="img/tm-img-03.jpg">View more</a>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="grid-item">
                        <figure className="effect-bubba">
                          <img
                            src="https://www.hillspet.es/content/dam/cp-sites/hills/hills-pet/en_us/exported/dog-breeds/images/img_DogBreed-Saint-Bernard.jpg"
                            alt="Image"
                            className="img-fluid tm-img"
                          />
                          <figcaption>
                            <h2 className="tm-figure-title">San Bernardo</h2>
                            <p className="tm-figure-description">
                              Con fama de cariñosos, dulces y tolerantes a pesar
                              de su tamaño, los San Bernardo se llevan bien con
                              las familias con niños con buen comportamiento.
                              Además, son perros con ganas de agradar, lo que
                              facilita su adiestramiento.
                            </p>
                            <a href="img/tm-img-04.jpg">View more</a>
                          </figcaption>
                        </figure>
                      </div>

                      <div className="grid-item">
                        <figure className="effect-bubba">
                          <img
                            src="https://www.hillspet.es/content/dam/cp-sites/hills/hills-pet/en_us/exported/dog-breeds/images/img_DogBreed-Shih-Tzu.jpg"
                            alt="Image"
                            className="img-fluid tm-img"
                          />
                          <figcaption>
                            <h2 className="tm-figure-title">Shih tzu</h2>
                            <p className="tm-figure-description">
                              Alegre y feliz, el Shih tzu tiende a necesitar
                              mucha atención personal. Como se siente cómodo con
                              la compañía humana, es fácil acabar
                              consintiéndolo.
                            </p>
                            <a href="img/tm-img-05.jpg">View more</a>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="grid-item">
                        <figure className="effect-bubba">
                          <img
                            src="https://www.hillspet.es/content/dam/cp-sites/hills/hills-pet/en_us/exported/dog-breeds/images/img_DogBreed-Dachshund.jpg"
                            alt="Image"
                            className="img-fluid tm-img"
                          />
                          <figcaption>
                            <h2 className="tm-figure-title">Teckel </h2>
                            <p className="tm-figure-description">
                              A pesar de que el Teckel es un fiel compañero que
                              se lleva bien con los niños, dada su larga espalda
                              tiene tendencia a sufrir problemas discales. Por
                              ello, no es una buena opción para quienes tengan
                              muchos escalones en casa.
                            </p>
                            <a href="img/tm-img-05.jpg">View more</a>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="grid-item">
                        <figure className="effect-bubba">
                          <img
                            src="https://www.hillspet.es/content/dam/cp-sites/hills/hills-pet/global/articles/dog-care/dog-breeds/img_DogBreed-Boxer-eu.jpg"
                            alt="Image"
                            className="img-fluid tm-img"
                          />
                          <figcaption>
                            <h2 className="tm-figure-title">bóxer</h2>
                            <p className="tm-figure-description">
                              Es una mascota inteligente y fiel, tiene una
                              fuerte necesidad de compañía y ejercicio. No están
                              contentos cuando se quedan en casa solos de forma
                              habitual.
                            </p>
                            <a href="img/tm-img-05.jpg">View more</a>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="grid-item">
                        <figure className="effect-bubba">
                          <img
                            src="https://www.hillspet.es/content/dam/cp-sites/hills/hills-pet/en_us/exported/dog-breeds/images/img_DogBreed-Weimaraner.jpg"
                            alt="Image"
                            className="img-fluid tm-img"
                          />
                          <figcaption>
                            <h2 className="tm-figure-title">Weimaraner</h2>
                            <p className="tm-figure-description">
                              Ideal para propietarios que quieran un perro
                              activo y grande para cacería, excursionismo y
                              otras actividades de exterior, los weimaraners son
                              estupendos compañeros y muy inteligentes, aunque
                              necesitan actividades para evitar un
                              comportamiento destructivo.
                            </p>
                            <a href="img/tm-img-05.jpg">View more</a>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="grid-item">
                        <figure className="effect-bubba">
                          <img
                            src="https://www.hillspet.es/content/dam/cp-sites/hills/hills-pet/global/articles/dog-care/dog-breeds/img_DogBreed-Bull-Mastif.jpg"
                            alt="Image"
                            className="img-fluid tm-img"
                          />
                          <figcaption>
                            <h2 className="tm-figure-title">Bullmastiff</h2>
                            <p className="tm-figure-description">
                              El Bullmastiff, un perro dulce y cariñoso, es una
                              buena elección para familias con niños con un
                              comportamiento razonablemente bueno.
                            </p>
                            <a href="img/tm-img-05.jpg">View more</a>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </body>
    </div>
  );
}

export default App;
