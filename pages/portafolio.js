import Layout from "../components/Layout"
import 'tailwindcss/tailwind.css';
import Link from "next/link";

const Portafolio = () =>

  <Layout>
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Portafolio</h1>
            </div>

            <div className="col-md-4 p-2">
              <div className="card h-100">
                <img src="/porfolio1.png" alt="" className="img-fluid" />
                <div className="card-body">
                  <h5>Title: PatrondeDisenoFactoryMethod. </h5>
                  <p>
                    Description: Elaboración del patron de Diseño Factory Metho.
                  </p>
                  <Link legacyBehavior href="https://github.com/Williamfallasg/PatrondeDisenoFactoryMethod1">
                    <a className="btn btn-light">
                      <button>Proyecto 1</button>
                    </a>
                  </Link>

                </div>
                <img src="/porfolio4.png" alt="" className="img-fluid" />
                <div className="card-body">
                  <h5>Title: PatrondeDisenoFactoryMeth. </h5>
                  <p>
                    Description: Elaboración del patron de Diseño Factory Meth.
                  </p>
                  <Link legacyBehavior href="https://github.com/Williamfallasg/PatrondeDisenoFactoryMeth">
                    <a className="btn btn-light">
                      <button>Proyecto 2</button>
                    </a>
                  </Link>

                </div>

              </div>



            </div>

            <div className="col-md-4 p-2">
              <div className="card h-100">
                <img src="/porfolio3.png" alt="" className="img-fluid" />
                <div className="card-body">
                  <h5>Title: Code-challenges.. </h5>
                  <p>
                    Description: Elaboración de un reto en React.
                  </p>
                  <Link legacyBehavior href="https://github.com/Williamfallasg/code-challenges">
                    <a className="btn btn-light">
                      <button>Proyecto 3</button>
                    </a>
                  </Link>

                </div>
                <img src="/porfolio2.png" alt="" className="img-fluid" />
                <div className="card-body">
                  <h5>Title: Lenguaje. </h5>
                  <p>
                    Description: Elaboración del patron de Diseño Factory Meth.
                  </p>
                  <Link legacyBehavior href="https://github.com/Williamfallasg/Lenguaje">
                    <a className="btn btn-light">
                      <button>Proyecto 4</button>
                    </a>
                  </Link>

                </div>

              </div>



            </div>
            <div className="col-md-4 p-2">
              <div className="card h-100">
                <div className="overflow">
                  <img src="/portafolio5.png" alt="" className="img-fluid" />
                </div>

                <div className="card-body">
                  <h5>Title: My-App. </h5>
                  <p>
                    Description: Elaboración de una app para consumir los recursos de una api.
                  </p>
                  <Link legacyBehavior href="https://github.com/Williamfallasg/my-app">
                    <a className="btn btn-light">
                      <button>Proyecto 5</button>
                    </a>
                  </Link>

                </div>
                <img src="/porfolio5.png" alt="" className="img-fluid" />
                <div className="card-body">
                  <h5>Title: Vite. </h5>
                  <p>
                    Description: Elaboración de una app con vite.
                  </p>
                  <Link legacyBehavior href="https://github.com/Williamfallasg/vite">
                    <a className="btn btn-light">
                      <button>Proyecto 6</button>
                    </a>
                  </Link>

                </div>

              </div>



            </div>

          </div>

        </div>

      </div>

    </div>
  </Layout>
export default Portafolio