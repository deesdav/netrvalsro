const clickHome = document.getElementById("clickHome");
const clickObory = document.getElementById("clickObory");
const clickReference = document.getElementById("clickReference");
const clickKontakty = document.getElementById("clickKontakty");

const rightBoxHomePage = document.getElementById("rightBoxHomePage");
const rightBoxHomePageText = document.getElementById("rightBoxHomePageText");


clickHome.onclick = () => {
    document.title = "NETRVAL S.R.O.";
};
clickObory.onclick = () => {
    document.title = "NETRVAL S.R.O. - OBORY";
};
clickReference.onclick = () => {
    document.title = "NETRVAL S.R.O. - REFERENCE";
};
clickKontakty.onclick = () => {
    document.title = "NETRVAL S.R.O. - KONTATKY";
};

setInterval(() => {
    const random = Math.floor(Math.random() * 5);
    console.log(random);
    if (random >= 0 && random <= 1) {
        rightBoxHomePage.style.backgroundImage = "url(./res/img/pictureOne.jpg)";
        rightBoxHomePageText.innerHTML = "<p>mrakodrap</p>";
    }
    if (random >= 1 && random <= 2) {
        rightBoxHomePage.style.backgroundImage = "url(./res/img/pictureTwo.jpg)";
        rightBoxHomePageText.innerHTML = "<p>banan</p>";
    }
    if (random >= 2 && random <= 3) {
        rightBoxHomePage.style.backgroundImage = "url(./res/img/pictureThree.jpg)";
        rightBoxHomePageText.innerHTML = "<p>čokl</p>";
    }
    if (random >= 3 && random <= 4) {
        rightBoxHomePage.style.backgroundImage = "url(./res/img/pictureFour.jpg)";
        rightBoxHomePageText.innerHTML = "<p>kostka</p>";
    }
}, 1000);

setTimeout(() => {
    document.body.style.display = "block";
}, 800);

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var footer = document.querySelector("footer");
        var scrollHeight = window.innerHeight + window.scrollY;
        var documentHeight = document.body.offsetHeight;
        var footerHeight = footer.offsetHeight;

        if (scrollHeight >= documentHeight - footerHeight) {
            footer.style.bottom = "0"; /* Zobrazení zápatí při dosažení konce stránky */
        } else {
            footer.style.bottom = "-" + footerHeight + "px"; /* Skrytí zápatí při scrollování nahoru */
        }
    });
});
