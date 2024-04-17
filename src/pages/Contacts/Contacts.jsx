import { Link } from "react-router-dom";

export default function Contacts() {
  return (
    <>
      <div id="container">
        <div style={{ height: "80vh" }} id="content">
          <hr />
          <h2>Kontakty</h2>
          <hr />
          <article id="contactsArticle">
            <div className="box11">
              Pro více informací nás kontaktujte na následujících údajích:
              <br />
              email: tomas@netrval.net
              <br />
              tel: 603 832 589
              <br />
              fax: 326 733 027
              <br />
              adresa: Žižkova 503, 293 01 Mladá Boleslav
              <br />
            </div>
          </article>
          <div id="box12">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40433.93439695365!2d14.896022727619219!3d50.4190680253449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470955b7f465cb9f%3A0x400af0f661576a0!2sMlad%C3%A1%20Boleslav%2C%20293%2001%20Mlad%C3%A1%20Boleslav%201!5e1!3m2!1scs!2scz!4v1713205463593!5m2!1scs!2scz"
              width="100%"
              height="300"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <br />
          <Link to={"/"}>Zpět na domovskou stránku</Link>
        </div>
      </div>
    </>
  );
}
