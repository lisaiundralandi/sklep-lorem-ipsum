function sprawdzImie() {
    const imie = kontakt.imie.value;

    if (!isNaN(imie) || imie.length < 2) {
        alert("Niepoprawne imię");
        return;
    }

    if (!/^[A-Za-zĄąĘęÓóŚśŁłĆćŻżŹźŃń]+$/.test(imie)) {
        alert("Imię zawiera niepoprawne znaki");
        return;
    }

    kontakt.imie.value = imie.substring(0, 1).toUpperCase() + imie.substring(1).toLowerCase();
}

function sprawdzMail() {
    if (!isNaN(kontakt.email.value) || !kontakt.email.value.includes('@')) {
        alert("Niepoprawny adres email");
    }
}

function sprawdzTresc() {
    const tresc = kontakt.tresc.value;

    if (tresc.length < 10) {
        alert("Treść musi mieć minimum 10 znaków");
        return false;
    }

    return true;
}