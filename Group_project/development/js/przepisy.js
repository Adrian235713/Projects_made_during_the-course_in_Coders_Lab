//-----------------------------------KLASA PRZEPIS----------------------------------------------------------------------

class przepis {

    constructor() {
        this.nazwa_przepisu = null;
        this.opis_przepisu = null;

        this.lista_instukcji = [];
        this.lista_składników = [];
    }

    nazwa_przepisu_zmiana (nazwa_przepisu){
        this.nazwa_przepisu = nazwa_przepisu;
    }

    opis_przepisu_zmiana (opis_przepisu) {
        this.opis_przepisu = opis_przepisu;
    }

    lista_instukcji_push (nowy_element) {
        this.lista_instukcji.push(nowy_element);
    }

    lista_składników_push (nowy_element) {
        this.lista_składników.push(nowy_element);
    }
}

var przepis_zobi  = new przepis();
var przepis_skonczony = null;

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// INSTRUKCJE
// Dodaj instrukcje
// Test test test kasacja kasacj kasacja
// const dodaj_instruckje = document.getElementById('dodaj_instruckje');

//-------------------------PRZEPIS-------------------------------------------------------------------------------------

//Dodajemy nasz element
const dodaj_instruckje_button = document.getElementById('dodaj_instruckje_button');

dodaj_instruckje_button.addEventListener("click", function () {

    //Pobieramy sobie pusta text (jego wartosc) i pusta liste
    var dodaj_instruckje_innerText = document.getElementById('dodaj_instruckje').value;
    var list_instukcji = document.getElementById('box_z_instrukcjami_ol');

    // Twozymy elementy li
    var li_List = document.createElement('li');
    li_List.className = "storageItem";
    //Tworzymy element o texcie wprowadzonym przez użytkownika
    var tex_list = document.createTextNode(dodaj_instruckje_innerText);
    //Doajmey text do stw li
    li_List.appendChild(tex_list);
    //No i tak zrobiony li dodajemy do naszej pustej listy.
    list_instukcji.appendChild(li_List);

    przepis_zobi.lista_instukcji_push(dodaj_instruckje_innerText);


    document.getElementById("dodaj_instruckje").value = "";

});

//---------------------------------SKŁADNIKI----------------------------------------------------------------------------

const dodaj_składniki_button = document.getElementById('dodaj_składniki_button');

dodaj_składniki_button.addEventListener('click', function () {
    var składnik = document.getElementById('dodaj_składniki').value;
    var table = document.getElementById('box_ze_skadnikami_ul');

    var li = document.createElement('li');
    li.className = "storageItemIng";
    var tex_li = document.createTextNode(składnik);
    li.appendChild(tex_li);
    table.appendChild(li);

    przepis_zobi.lista_składników_push(składnik);

    document.getElementById("dodaj_składniki").value = "";
});

//---------------------------------ZAPISZ I ZAMKNIJ---------------------------------------------------------------------

const zapisz_zamknij = document.getElementById('zapisz_zamknij');

zapisz_zamknij.addEventListener('click', function () {

    var nazwa_przepisu = document.getElementById('nazwa_przepisu').value;

    var Opis_przepisu = document.getElementById('Opis_przepisu').value;

    przepis_zobi.nazwa_przepisu_zmiana(nazwa_przepisu);
    przepis_zobi.opis_przepisu_zmiana(Opis_przepisu);


    // let przepis = przepis_zobi["nazwa_przepisu"];
    // przepis_skonczony = przepis_zobi;

    // console.log(przepis_skonczony); ///Oki mamy obiekt o unikatowym ID <--- nazwa


    localStorage.setItem('przepis_skonczony',JSON.stringify(przepis_zobi));

    console.log(localStorage.getItem('przepis_skonczony'));

    var przepis = JSON.parse(localStorage.getItem('przepis_skonczony'));
    console.log(przepis);
})


// ----------------------------------------------------------------------------------------------------------------------
// class przepisy {
//
//     constructor(new_elment, component) {
//         this.new_elment = new_elment;
//         this.component = component;
//
//         this.lista = [];
//     }
//
//     doaj_elementy() {
//         this.lista.push(this.new_elment);
//     }
// }
//
// let grzybowa = new przepisy('got maslo', 'gaj pieroga');
// grzybowa.doaj_elementy();
//
// console.log(grzybowa);
