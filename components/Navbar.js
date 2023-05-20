import 'tailwindcss/tailwind.css';
import Link from 'next/link'


const Navbar = () => (

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
      <div>
        <img src="\williamlogo.png.png" href="/" alt="" className="img-fluid" style={{ maxWidth: "50px" }} />
      </div>
      <a className="navbar-brand" href="/">William Fallas</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="skill">Skill</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="portafolio">Portafolio</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="proyec">Proyectos realizados</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="github">GitHub</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="contactame">Contact me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="contacto">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
)


export default Navbar; 