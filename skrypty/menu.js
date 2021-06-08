let menuWidoczne = false;

function zmienWidocznosc(){
    const linki = document.getElementById("menu-linki");
    menuWidoczne = !menuWidoczne;
    if(menuWidoczne){
        linki.classList.remove("schowane");
    } else {
        linki.classList.add("schowane");
    }
}
