import 'tailwindcss/tailwind.css';

const Footer = () => {
    return (
      <footer>
              <div className="contact-info">
                 <h3>Contacto</h3>
                 <p>Email: williamfallasg50gmail.com</p>
                   <p>Teléfono: 87507272</p>
              </div>
        <div className="social-links">
          <h3>Redes Sociales</h3>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/william-gonz%C3%A1lez-9a8b64176/" target="_blank" rel="noopener noreferrer">
                Linked
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/william.fallasgonzalez/photos?lst=100003467289133%3A100003467289133%3A1542762579&source_ref=pb_friends_tl" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/williamfallasg/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  