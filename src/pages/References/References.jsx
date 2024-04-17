import { Link } from "react-router-dom";

export default function References() {
  return (
    <>
      <div id="container">
        <div style={{ height: "80vh" }} id="content">
          <hr />
          <h2>Reference</h2>
          <hr />
          <article id="contactsArticle">
            <div className="box11">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              numquam minus cumque odio quasi aut harum voluptas odit rerum
              animi consequatur reiciendis nemo, distinctio facere quidem
              ratione et. Totam, maiores.
            </div>
          </article>
          <div id="box12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse animi
            quam reprehenderit sint ratione tempora excepturi ipsam repellendus.
            Mollitia, explicabo exercitationem delectus doloremque praesentium
            iure! Minima dignissimos repellat expedita aliquam.
          </div>
          <br />
          <Link to={"/"}>Zpět na domovskou stránku</Link>
        </div>
      </div>
    </>
  );
}
