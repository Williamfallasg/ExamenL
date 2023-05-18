import Layout from "../components/Layout"
import 'tailwindcss/tailwind.css';
import { conocimeintos } from "./conocimiento";
import Link from "next/link";

const Skill = () =>

    <Layout>
        <div className="row py-3">
            <div className="col-md-6">
                <div className="card bg-darkt">
                    <div className="card-body">
                        <h1>Formación Académica </h1>


                        {conocimeintos.map(({ conocimeinto, percentage }, i) => (

                            <div className="py-2" key={i}>
                                <h5>{conocimeinto}</h5>
                                <div className="progress">
                                    <div className="progress-bar"
                                        role="progressbar"
                                        style={{ width: '${percentage}%' }}

                                    >
                                    </div>
                                </div>

                            </div>
                        ))

                        }
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="card bg-dark">
                    <div className="card-body">
                        <h1>Información Personal </h1>
                        <ul>
                            <li>
                                <h5>Edad: 28 años</h5>
                                <h5>Nacionalidad: costarricense</h5>
                                <h5>Email: Williamfallasg50@gmail.com</h5>
                                <h5>Dirección:Costa Rica, Puntarenas, Golfito, Golfito</h5>
                                <h5>Teléfono: 87507272</h5>
                                <h5>Ocupación: estudiante</h5>
                            </li>

                        </ul>

                        <h1>Intereses </h1>
                        <ul>
                            <li>
                                <h5>Programación y lenguajes de desarrollo</h5>
                                <h5>Video juegos</h5>
                                <h5>Viajes</h5>
                                <h5>Inteligencia antificial</h5>




                            </li>
                        </ul>
                        <div>
                            <Link legacyBehavior href="https://www.linkedin.com/in/william-gonz%C3%A1lez-9a8b64176/">
                                <a className="btn btn-light">
                                    <button>Perfil Linked</button>
                                </a>
                            </Link>
                        </div>
                        <div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </Layout>
export default Skill
