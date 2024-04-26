import { Link } from "react-router-dom";

export default function Healthcare() {
  return (
    <>
      <div id="container">
        <div id="subPagesContent">
          <article id="referencesArticle">
            <h2>Zdravotnictví</h2>
            <div id="leftBoxArticle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              numquam minus cumque odio quasi aut harum voluptas odit rerum
              animi consequatur reiciendis nemo, distinctio facere quidem
              ratione et. Totam, maiores. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Facere atque ipsum, voluptatum non
              cupiditate dolores. Minus aliquam, tempora necessitatibus illum
              voluptas architecto cupiditate hic at? Odio velit eveniet ea quae.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              ad at vel. Quo minus alias corrupti officiis beatae voluptatum
              delectus illum eveniet quia, exercitationem doloremque, architecto
              amet, accusamus aut sequi?
            </div>
            <div id="rightBoxArticle">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
              animi quam reprehenderit sint ratione tempora excepturi ipsam
              repellendus. Mollitia, explicabo exercitationem delectus
              doloremque praesentium iure! Minima dignissimos repellat expedita
              aliquam. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Enim repellendus fuga libero quod illo sequi quidem optio
              explicabo accusantium quos minus expedita similique, assumenda
              dolorem commodi quia nulla voluptas delectus?Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Dolorem commodi id fugiat
              delectus deleniti excepturi, quas nostrum pariatur nihil
              architecto adipisci magnam aliquid ab facilis, ratione itaque
              incidunt corporis repellendus.
            </div>{" "}
            <Link id="bottomLink" to={"/"}>
              Zpět na domovskou stránku
            </Link>
          </article>
        </div>
      </div>
    </>
  );
}
