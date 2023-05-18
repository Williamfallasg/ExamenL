import Layout from "../components/Layout"
import 'tailwindcss/tailwind.css';


const Contacto = () =>

  <Layout>
    <div className="col-md-12">
  <div className="card card-body bg-secondary text-light">
    <div className="row py-3">
      
              <h1 className="text-center text-light">Contact</h1>
              <div>
                <h2>Information contact</h2>
                <p>Email: Williamfallasg50</p>
                <p>Skype: williamfallasg1994@outlook.es</p>
                <p>Teléfono: 87507272</p>
              </div>
              <div>
                <h1>Redes Sociales</h1>
                <img src="/Redes.png" alt="" className="img-fluid" style={{ maxWidth: "400px" }} />
              </div>
              <div>
                <ul>
                  <li>
                    <div>
                      <h3>Perfil Linked</h3>
                    </div>
                    <a href="https://www.linkedin.com/in/william-gonz%C3%A1lez-9a8b64176/" target="_blank" rel="noopener noreferrer">
                      Linked
                    </a>
                  </li>
                  <li>
                    <div>
                      <h3>Perfil Facebook</h3>
                    </div>
                    <a href="https://www.facebook.com/william.fallasgonzalez/photos?lst=100003467289133%3A100003467289133%3A1542762579&source_ref=pb_friends_tl" target="_blank" rel="noopener noreferrer">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <div>
                      <h3>Perfil Instagram</h3>
                    </div>
                    <a href="https://www.instagram.com/williamfallasg/" target="_blank" rel="noopener noreferrer">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

  </Layout>
export default Contacto
