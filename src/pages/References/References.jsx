import { Link } from "react-router-dom";

export default function References() {
  return (
    <>
      <div id="container">
        <div id="subPagesContent">
          <h2>
            <Link
              style={{ color: "white", cursor: "pointer" }}
              to={"/"}
              title="zpět"
            >
              Reference
            </Link>
          </h2>
          <article id="referencesArticle">
            <div style={{ width: "100%", padding: "0px" }} id="leftBoxArticle">
              <div className="table-container">
                <h3>Zdravotnické prostory</h3>
                <table>
                  <thead>
                    <tr>
                      <th>název akce</th>
                      <th>rok</th>
                      <th>generální projektant</th>
                      <th>rozsah dodávky</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>VFN Neurolog. Klinika – iktové centrum</td>
                      <td>2005</td>
                      <td>ARCHAX</td>
                      <td>elektro silnoproud</td>
                    </tr>
                    <tr>
                      <td>
                        VFN Karlovo nám. pavilon A12 2.int. klinika, katetrizace
                      </td>
                      <td>2007</td>
                      <td>ARCHAX</td>
                      <td>elektro silnoproud</td>
                    </tr>
                    <tr>
                      <td>FN Bulovka pav. porodnice úpravy pokojů</td>
                      <td>2007</td>
                      <td>ARCHAX</td>
                      <td>elektro silnoproud</td>
                    </tr>
                    <tr>
                      <td>FN Bulovka pav.13 Ortopedie, operační sály , ARO</td>
                      <td>2007</td>
                      <td>
                        Proj. Atelier pro architekturu a pozemní stavby Praha
                      </td>
                      <td>elektro silnoproud</td>
                    </tr>
                    <tr>
                      <td>
                        Nemocnice Mělník, pav. Chirurgie 2.,3. patro operační
                        sály
                      </td>
                      <td>2008</td>
                      <td>přímo pro investora</td>
                      <td>elektro silnoproud</td>
                    </tr>
                    <tr>
                      <td>FN Bulovka zákrokový sál pro plast. Chirurgii</td>
                      <td>2010</td>
                      <td>ARCHAX</td>
                      <td>elektro silnoproud</td>
                    </tr>
                    <tr>
                      <td>FN Bulovka Radiodiagnostický pav. 16. Mamograf</td>
                      <td>2010</td>
                      <td>ARCHAX</td>
                      <td>elektro silnoproud</td>
                    </tr>
                    <tr>
                      <td>FN Bulovka Gynekol. pav. Dětská JIP</td>
                      <td>2011</td>
                      <td>ARCHAX</td>
                      <td>elektro silnoproud</td>
                    </tr>
                    <tr>
                      <td>Soukromá gynekol. ambulance MUDr. Trhoňová</td>
                      <td>2015</td>
                      <td>přímo pro investora</td>
                      <td>elektro silnoproud</td>
                    </tr>
                    <tr>
                      <td>
                        Klinika Dr. Pírka Ml. Boleslav, přístavba severního
                        křídla, 2x ortopedický , 1x chirurgický operační sál,
                        sterilizační centrum
                      </td>
                      <td>2012</td>
                      <td>ROIN s.r.o.</td>
                      <td>elektro silnoproud</td>
                    </tr>
                    <tr>
                      <td>Mnichovo Hradiště - Oční ambulance</td>
                      <td>2017</td>
                      <td>přímo pro investora</td>
                      <td>elektro silnoproud</td>
                    </tr>
                    <tr>
                      <td>
                        Klinika Dr. Pírka Nový objekt, ambulance, oper. Sály
                      </td>
                      <td>2018</td>
                      <td>DELTAPLAN Praha</td>
                      <td>elektro silnoproud</td>
                    </tr>
                    <tr>
                      <td>Stomatologické ambulance - cca 30x</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        Průběžná rekonstrukce Oblastní nemocnice Mladá Boleslav
                        - různé pavilony a účelové prostory
                      </td>
                      <td>1990-2010</td>
                      <td>přímo pro investora</td>
                      <td>elektro silnoproud</td>
                    </tr>
                    <tr>
                      <td>
                        Oblastní nemocnice Mladá Boleslav - pavilon 5 -
                        Onkologie a nuleární medicína
                      </td>
                      <td>2014</td>
                      <td>HELIKA a.s.</td>
                      <td>elektro silnoproud, slaboproud, měření a regulace</td>
                    </tr>
                    <tr>
                      <td>
                        Nemocnice Královké Vinohrady - ortopedie - zákrokový sál
                      </td>
                      <td>2015</td>
                      <td>HELIKA a.s.</td>
                      <td>měření a regulace</td>
                    </tr>
                    <tr>
                      <td>
                        Oblastní nemocnice Mladá Boleslav - pavilon 4 -
                        rekonstrukce
                      </td>
                      <td>2017</td>
                      <td>HELIKA a.s.</td>
                      <td>elektro silnoproud, slaboproud, měření a regulace</td>
                    </tr>
                    <tr>
                      <td>
                        Oblastní nemocnice Mladá Boleslav - pavilon 6 -
                        rekonstrukce
                      </td>
                      <td>2018</td>
                      <td>HELIKA a.s.</td>
                      <td>elektro silnoproud, slaboproud, měření a regulace</td>
                    </tr>
                    <tr>
                      <td>Oční klinika Kladno</td>
                      <td>2021</td>
                      <td>GREBNER</td>
                      <td>elektro silnoproud, slaboproud</td>
                    </tr>
                    <tr>
                      <td>Stomatologická ambulance Mladá Boleslav</td>
                      <td>2021</td>
                      <td>přímo pro investora</td>
                      <td>elektro silnoproud</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>
          <Link id="bottomLink" to={"/"}>
            Zpět na domovskou stránku
          </Link>
        </div>
      </div>
    </>
  );
}
