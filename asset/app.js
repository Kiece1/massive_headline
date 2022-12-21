console.log("Debut de Programme");

// Variables pour le titre principal
const idConth1 = document.getElementById("idcontenth1");
const idContp = document.getElementById("idcontentp");
const idContbtn = document.getElementById("idcontentbtn");
const idCont = [idConth1, idContp, idContbtn];

// Variables pour les différents boutons du menu principal
const idli21 = document.getElementById("li21");
const idli31 = document.getElementById("li31");
const idli12 = document.getElementById("li12");
const idli32 = document.getElementById("li32");
const idli13 = document.getElementById("li13");
const idli23 = document.getElementById("li23");
const idli = [idli21, idli31, idli12, idli32, idli13, idli23];

// Variables pour les différents containers
const clCont1 = document.querySelector(".container1");
const clCont2 = document.querySelector(".container2");
const clCont3 = document.querySelector(".container3");
const clCont = [clCont1, clCont2, clCont3];

// Variables pour la classe Afficher et Cacher
const clVis = document.querySelector(".classVisible");
const clHid = document.querySelector(".classHidden");

// Varialbes pour modifier l'attribution des classes
let clContClass1 = clCont1.classList;
let clContClass2 = clCont2.classList;
let clContClass3 = clCont3.classList;

let posY = 0;

const position = window.addEventListener("scroll", () => {
  posY = window.scrollY;
});

const basicFun = (element) => {
  if (posY > 100) {
    element.style.opacity = 0;
    element.style.transition = "1.5 ease-in";
  } else {
    element.style.opacity = 1;
    element.style.transition = "0.3s ease-out";
  }
};

const opa = window.addEventListener("scroll", () => {
  idCont.forEach((element) => basicFun(element));
});

// funVisible(clContClass1);
// funVisible(clContClass2);
// funVisible(clContClass3);

const funHidden = (element) => {
  element.add("classHidden");
  element.remove("classVisible");
};

const funVisible = (element) => {
  element.add("classVisible");
  element.remove("classHidden");
};

const pageVisible1 = () => {
  funVisible(clContClass1);
  funHidden(clContClass2);
  funHidden(clContClass3);
};

const pageVisible2 = () => {
  funHidden(clContClass1);
  funVisible(clContClass2);
  funHidden(clContClass3);
};

const pageVisible3 = () => {
  funHidden(clContClass1);
  funHidden(clContClass2);
  funVisible(clContClass3);
};

// const pageVisible = [pageVisible1(), pageVisible2(), pageVisible3()];

// for (let n = 0; n <= 5; n++) {
//   let m = (n - (n % 2)) / 2;
//   console.log(m);
//   idli[n].addEventListener("click", () => {
//     pageVisible[m];
//     console.log(pageVisible[m]);
//   });
// }

pageVisible1();

idli[0].addEventListener("click", () => {
  pageVisible1();
});

idli[1].addEventListener("click", () => {
  pageVisible1();
});

idli[2].addEventListener("click", () => {
  pageVisible2();
});

idli[3].addEventListener("click", () => {
  pageVisible2();
});

idli[4].addEventListener("click", () => {
  pageVisible3();
});

idli[5].addEventListener("click", () => {
  pageVisible3();
});

console.log("Fin de Programme");
