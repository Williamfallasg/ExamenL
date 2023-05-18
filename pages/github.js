import { use } from "react";
import Layout from "../components/Layout";

const GitHub = ({user}) => {

    return(
    <Layout>
        <div className="row">
            <div className="col-md-5 offset-md-5">
                <div className="card card-body text-align:center">
                    <h3 className="text-center text-light"> Cantidad de Proyectos</h3>
                    <h5>
                       Usuario= {user.login}
                    </h5>
                    <h5>
                       Repetorios= {user.public_repos}
                    </h5>
                    <img src={user.avatar_url} alt="" />
                    <p> {user.bio}</p>
                    <a  href={user.blog} target="_blank" className="btn tbn-outline-secondary my-2"> Mi blog </a>
                    <a href={user.html_url} target="-blank" className="btn tbn-outline-secondary">
                        Hey, You are going to my personal GitHut
                    </a>


                </div>

            </div>


        </div>

    </Layout>)
    }
export async function getServerSideProps()
{
   const res= await fetch('https://api.github.com/users/Williamfallasg')
   const data= await res.json();
   
   return{
    props:{
        user:data

    }
   }
}

export default GitHub; 