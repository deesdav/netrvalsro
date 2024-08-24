import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import HeaderContacts from "../../components/Contacts/HeaderContacts";
import Navigation from "../../components/Navigation/Navigation";
import './Contacts.css'; // Import the CSS file for styling

export default function Contacts() {
  return (
    <>
      <Navigation />
      <div className="contacts-container">
        <HeaderContacts />
        <main className="contacts-content">
          <section className="contact-info">
            <h2>Kontaktujte nás</h2>
            <p>Pro více informací nás kontaktujte na následujících údajích:</p>
            <ul className="contact-details">
              <li>
                <strong>Email:</strong> <a href="mailto:tomas@netrval.net">tomas@netrval.net</a>
              </li>
              <li>
                <strong>Tel:</strong> <a href="tel:+420603832589">603 832 589</a>
              </li>
              <li>
                <strong>Fax:</strong> 326 733 027
              </li>
              <li>
                <strong>Adresa:</strong> Jabkenice 209, 294 45 Jabkenice
              </li>
              <li>
                <strong>Kancelář:</strong> Palackého 455, Mladá Boleslav
              </li>
            </ul>
          </section>
          <section className="contact-map">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40433.93439695365!2d14.896022727619219!3d50.4190680253449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470955b7f465cb9f%3A0x400af0f661576a0!2sMlad%C3%A1%20Boleslav%2C%20293%2001%20Mlad%C3%A1%20Boleslav%201!5e1!3m2!1scs!2scz!4v1713205463593!5m2!1scs!2scz"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
