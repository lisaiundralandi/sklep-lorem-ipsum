function sprawdzLiczbe(stan){
    const licznik = document.getElementById("licznik-sztuk");
    const liczba = licznik.value;

    if(liczba <= 0 || liczba > stan){
        alert("Niepoprawna liczba sztuk");
    }
    if(liczba <= 0){
        licznik.value = 1;
    } else if (liczba > stan){
        licznik.value = stan;
    }
}