//-------------------------exercice---------------------------------
const btnShows = document.querySelectorAll(".btnShow");
console.log(btnShows);
//on va chercher l'ancre de commande

const p1cachesd = document.querySelectorAll(".cachep");
//on va chercher le paragraphe caché
console.log(p1cachesd);

const btnReturns = document.querySelectorAll(".btnReturn");
console.log(btnReturns);
//on va chercher le bouton de retour

btnShows.forEach((btnShow, index) => {
  btnShow.addEventListener("click", () => {
    p1cachesd[index].classList.add("visiblep"); //on affiche le paragraphe
    btnShows[index].classList.add("BtnHidden"); //on fait disparaitre le texte Pour en savoir plus:
    btnReturns[index].classList.add("btnRetwiew"); //on présente le bouton retour avec une animation de retour vers la gauche
  });
});

btnReturns.forEach((retour, index) => {
  retour.addEventListener("click", () => {
    p1cachesd[index].classList.remove("visiblep"); //on efface  le paragraphe en lui enlevant la classe visiblep
    btnShows[index].classList.remove("BtnHidden"); //on enleve la classe BtnHidden pour réafficher le bouton "pour en savoir plus.."
    btnReturns[index].classList.remove("btnRetwiew"); //on enleve la classe btnRetwiew pour revenir sur la classe btnReturn qui efface le bouton par sa propriété visibility:hidden
  });
});
