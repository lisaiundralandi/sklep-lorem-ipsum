const obrazki = [
    "obrazki/cthulhu.png",
    "obrazki/cthulhu2.png",
    "obrazki/zew_przygody.png"
];

let aktualnyObrazek = 0;

function dalej() {
    let obrazek = document.getElementById("obrazek-galeria");

    if (aktualnyObrazek + 1 < obrazki.length) {
        aktualnyObrazek = aktualnyObrazek + 1;
    } else {
        aktualnyObrazek = 0;
    }
    obrazek.src = obrazki[aktualnyObrazek];

    let licznik = document.getElementById("licznik-galerii");
    licznik.innerText = aktualnyObrazek + 1 + "/" + obrazki.length;
}

function wstecz() {
    let obrazek = document.getElementById("obrazek-galeria");

    if (aktualnyObrazek > 0) {
        aktualnyObrazek = aktualnyObrazek - 1;
    } else {
        aktualnyObrazek = obrazki.length - 1;
    }
    obrazek.src = obrazki[aktualnyObrazek];

    let licznik = document.getElementById("licznik-galerii");
    licznik.innerText = aktualnyObrazek + 1 + "/" + obrazki.length;
}