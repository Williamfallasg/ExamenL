import { progress } from "framer-motion";
import Layout from "../components/Layout";
import Link from "next/link";

const Index = () =>
    <Layout>

        {/**First  section */}

        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="row">
                        <div className="col-md-5 py-10">
                            < img src="william.jpeg" alt="" className="img-fluid" style={{ maxWidth: "600px" }} />
                        </div>
                        <div className="col-md-7">
                            <h1>Know everything about me</h1>
                            <h4> Desarrollador Web.</h4>
                            <h3> Programador.</h3>
                            <h4>Estudiante de Informática Empresarial.</h4>

                            <p>
                                Hola, soy William Fallas. Un apasionado por la programación, la fotografia y el taekwondo.
                            </p>


                            <a href="">hire me</a>

                        </div>
                    </div>
                </div>
            </div>

        </header>

        {/**Second Section*/}

    

        {/**Third Section*/}
        

        {/**Conta */}


    </Layout>

export default Index; 