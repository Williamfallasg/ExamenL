import { use } from "react";
import Layout from "../components/Layout";

const GitHub = ({ user }) => {

    return (
        <Layout>
           
            <div className="row">
                <div className="col-md-5 offset-md-5">
                    <div className="card card-body text-center bg-primary text-light">
                        <h3 className="text-center">Cantidad de Proyectos</h3>
                        <h5>Usuario: {user.login}</h5>
                        <h5>Repositorios: {user.public_repos}</h5>
                        <img src={user.avatar_url} alt="" />
                        <p>{user.bio}</p>
                        <a href={user.blog} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light my-2">
                            Mi blog
                        </a>
                        <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
                            Hey, You are going to my personal GitHub
                        </a>
                    </div>
                </div>
            </div>
            




        </Layout>)
}
export async function getServerSideProps() {
    const res = await fetch('https://api.github.com/users/Williamfallasg')

    const data = await res.json();

    return {
        props: {
            user: data

        }
    }
}

export default GitHub; 