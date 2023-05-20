import Layout from "../components/Layout"
import 'tailwindcss/tailwind.css';
import 'bootswatch/dist/pulse/bootstrap.min.css';

const Contacto = () =>

  <Layout>
    <div className="col-md-12">
      <div className="card card-body bg-light text-center">
        <div className="row py-3">

          <h1 className="text-center text-primary">Contact</h1>
          <div className="col-md-6 offset-md-3">
            <div>
              <h3 className="text-center text-dark">Contact Information:</h3>
              <p><strong>Email:</strong> Williamfallasg50@gmail.com</p>
              <p><strong>Skype:</strong> williamfallasg1994@outlook.es</p>
              <p><strong>Teléfono:</strong> 87507272</p>
            </div>
            <div>
              <ul>
                <li>
                  <div>
                    <h5>Visite mi perfil en LinkedIn:</h5>
                  </div>
                  <a href="https://www.linkedin.com/in/william-gonz%C3%A1lez-9a8b64176/" target="_blank" rel="noopener noreferrer">
                    Linked
                  </a>
                </li>
                <li>
                  <div>
                    <h5>Visite mi perfil en Facebook:</h5>
                  </div>
                  <a href="https://www.facebook.com/william.fallasgonzalez/photos?lst=100003467289133%3A100003467289133%3A1542762579&source_ref=pb_friends_tl" target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                </li>
                <li>
                  <div>
                    <h5>Visite mi perfil en Instagram:</h5>
                  </div>
                  <a href="https://www.instagram.com/williamfallasg/" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 offset-md-3">
            <h1>Redes Sociales</h1>
            <img src="/Redes.png" alt="" className="img-fluid" style={{ maxWidth: "300px" }} />
          </div>
        </div>
      </div>
    </div>


  </Layout>
export default Contacto
