// console.log("Test ")
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//TU i TYLKO TU MAJA TRAFIAC "food_list" nazwy naszych przepisów !!!
var food_list = ['  ','grzybowa', 'pomidorowa', 'grochowa', 'pierogi ze szinakiem', 'prowa', 'ryba', 'lody'];
// ----------------------------------------------------------------------------------------------------------------------
const all_days_recipe = document.querySelectorAll('.JS_option_generate');
console.log(all_days_recipe); ////<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< console.log(all_days_recipe);
console.log("---------------------------------------------------------------------------------------------")
// var danie = document.createElement('option');
// all_days_recipe[0].appendChild(danie);
// danie.append("lody");
let length = all_days_recipe.length;
// // console.log(length); /// TEST
//
// for (k = 0; k < food_list.length; k++){ ///Test
//     console.log(food_list[k]);
// }
for (i = 0; i < all_days_recipe.length; i++) {
    for (k = 0; k < food_list.length; k++) {
        let danie = document.createElement('option');
        all_days_recipe[i].appendChild(danie);
        danie.append(food_list[k]);
        // console.log(food_list[k])  ///TEST
    }
}
// ----------------------------------------------------------------------------------------------------------------------
class weekly_plansg_enerator_clas {
    constructor() {
        this.TYG_nazwa_planu = null;
        this.TYG_opis_planu = null;
        this.TYG_numer_tygodnia = null;
        this.Monday = [];
        this.Tuesday = [];
        this.Wednesday = [];
        this.Thursday = [];
        this.Friday = [];
        this.Saturday = [];
        this.Sunday = [];
    }
    get_TYG_nazwa_planu(TYG_nazwa_planu) {
        this.TYG_nazwa_planu = TYG_nazwa_planu;
    }
    get_TYG_opis_planu(TYG_opis_planu) {
        this.TYG_opis_planu = TYG_opis_planu;
    }
    get_TYG_numer_tygodnia(TYG_numer_tygodnia) {
        this.TYG_numer_tygodnia = TYG_numer_tygodnia;
    }
    get_Monday(a, b, c, d, e) {
        this.Monday.push(a);
        this.Monday.push(b);
        this.Monday.push(c);
        this.Monday.push(d);
        this.Monday.push(e);
    }
    get_Tuesday(a, b, c, d, e) {
        this.Tuesday.push(a);
        this.Tuesday.push(b);
        this.Tuesday.push(c);
        this.Tuesday.push(d);
        this.Tuesday.push(e);
    }
    get_Wednesday(a, b, c, d, e) {
        this.Wednesday.push(a);
        this.Wednesday.push(b);
        this.Wednesday.push(c);
        this.Wednesday.push(d);
        this.Wednesday.push(e);
    }
    get_Thursday(a, b, c, d, e) {
        this.Thursday.push(a);
        this.Thursday.push(b);
        this.Thursday.push(c);
        this.Thursday.push(d);
        this.Thursday.push(e);
    }
    get_Friday(a, b, c, d, e) {
        this.Friday.push(a);
        this.Friday.push(b);
        this.Friday.push(c);
        this.Friday.push(d);
        this.Friday.push(e);
    }
    get_Saturday(a, b, c, d, e) {
        this.Saturday.push(a);
        this.Saturday.push(b);
        this.Saturday.push(c);
        this.Saturday.push(d);
        this.Saturday.push(e);
    }
    get_Sunday(a, b, c, d, e) {
        this.Sunday.push(a);
        this.Sunday.push(b);
        this.Sunday.push(c);
        this.Sunday.push(d);
        this.Sunday.push(e);
    }
}
let NULL_weekly_plansg = new weekly_plansg_enerator_clas(); // Czysta klasa
console.log(weekly_plansg_enerator_clas); ///<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< console.log(weekly_plansg_enerator_clas);
const TYG_zapisz_i_zamknij = document.getElementById('TYG_zapisz_i_zamknij'); /// buttom
// console.log(TYG_zapisz_i_zamknij);
var Lista_planów_w_tygodniu = []; //// <-----------------------------------------------------------
TYG_zapisz_i_zamknij.addEventListener("click", function () {
    console.log("---------------------------------------------------------------------------------------------");
    let TYG_nazwa_planu = document.getElementById('TYG_nazwa_planu').value; ///Text <-- Będzie to nasze unikatowe ID
    NULL_weekly_plansg.get_TYG_nazwa_planu(TYG_nazwa_planu);
    // console.log(TYG_nazwa_planu);
    let TYG_opis_planu = document.getElementById('TYG_opis_planu').value;
    NULL_weekly_plansg.get_TYG_opis_planu(TYG_opis_planu);
    let TYG_numer_tygodnia = document.getElementById('TYG_numer_tygodnia').value;
    NULL_weekly_plansg.get_TYG_numer_tygodnia(TYG_numer_tygodnia);
    // ------------------------------------------------------------------------------------------------------
    let poniedzialek_sniadanie = document.getElementById('poniedzialek_sniadanie').value;
    let poniedzialek_drugie_sniadanie = document.getElementById('poniedzialek_drugie_sniadanie').value;
    let poniedzialek_zupa = document.getElementById('poniedzialek_zupa').value;
    let poniedzialek_drugie_danie = document.getElementById('poniedzialek_drugie_danie').value;
    let poniedzialek_kolacja = document.getElementById('poniedzialek_kolacja').value;
    NULL_weekly_plansg.get_Monday(poniedzialek_sniadanie, poniedzialek_drugie_sniadanie, poniedzialek_zupa, poniedzialek_drugie_danie, poniedzialek_kolacja); ///TEST
    // ------------------------------------------------------------------------------------------------------
    let wtorek_sniadanie = document.getElementById('wtorek_sniadanie').value;
    let wtorek_drugie_sniadanie = document.getElementById('wtorek_drugie_sniadanie').value;
    let wtorek_zupa = document.getElementById('wtorek_zupa').value;
    let wtorek_drugie_danie = document.getElementById('wtorek_drugie_danie').value;
    let wtorek_kolacja = document.getElementById('wtorek_kolacja').value;
    NULL_weekly_plansg.get_Tuesday(wtorek_sniadanie, wtorek_drugie_sniadanie, wtorek_zupa, wtorek_drugie_danie, wtorek_kolacja);
    // ------------------------------------------------------------------------------------------------------
    let Sroda_sniadanie = document.getElementById('Sroda_sniadanie').value;
    let Sroda_drugie_sniadanie = document.getElementById('Sroda_drugie_sniadanie').value;
    let Sroda_zupa = document.getElementById('Sroda_zupa').value;
    let Sroda_drugie_danie = document.getElementById('Sroda_drugie_danie').value;
    let Sroda_kolacja = document.getElementById('Sroda_kolacja').value;
    NULL_weekly_plansg.get_Wednesday(Sroda_sniadanie,Sroda_drugie_sniadanie,Sroda_zupa,Sroda_drugie_danie,Sroda_kolacja);
    // ------------------------------------------------------------------------------------------------------
    let czwartek_sniadanie = document.getElementById('czwartek_sniadanie').value;
    let czwartek_drugie_sniadanie = document.getElementById('czwartek_drugie_sniadanie').value;
    let czwartek_zupa = document.getElementById('czwartek_zupa').value;
    let czwartek_drugie_danie = document.getElementById('czwartek_drugie_danie').value;
    let czwartek_kolacja = document.getElementById('czwartek_kolacja').value;
    NULL_weekly_plansg.get_Thursday(czwartek_sniadanie,czwartek_drugie_sniadanie,czwartek_zupa,czwartek_drugie_danie,czwartek_kolacja);
    // ------------------------------------------------------------------------------------------------------
    let piatek_sniadanie = document.getElementById('piatek_sniadanie').value;
    let piatek_drugie_sniadanie = document.getElementById('piatek_drugie_sniadanie').value;
    let piatek_zupa = document.getElementById('piatek_zupa').value;
    let piatek_drugie_danie = document.getElementById('piatek_drugie_danie').value;
    let piatek_kolacja = document.getElementById('piatek_kolacja').value;
    NULL_weekly_plansg.get_Friday(piatek_sniadanie,piatek_drugie_sniadanie,piatek_zupa,piatek_drugie_danie,piatek_kolacja);
    // ------------------------------------------------------------------------------------------------------
    let sobota_sniadanie = document.getElementById('sobota_sniadanie').value;
    let sobota_drugie_sniadanie = document.getElementById('sobota_drugie_sniadanie').value;
    let sobota_zupa = document.getElementById('sobota_zupa').value;
    let sobota_drugie_danie = document.getElementById('sobota_drugie_danie').value;
    let sobota_kolacja = document.getElementById('sobota_kolacja').value;
    NULL_weekly_plansg.get_Saturday(sobota_sniadanie,sobota_drugie_sniadanie,sobota_zupa,sobota_drugie_danie,sobota_kolacja);
    // ------------------------------------------------------------------------------------------------------
    let niedziela_sniadanie = document.getElementById('niedziela_sniadanie').value;
    let niedziela_drugie_sniadanie = document.getElementById('niedziela_drugie_sniadanie').value;
    let niedziela_zupa = document.getElementById('niedziela_zupa').value;
    let niedziela_drugie_danie = document.getElementById('niedziela_drugie_danie').value;
    let niedziela_kolacja = document.getElementById('niedziela_kolacja').value;
    NULL_weekly_plansg.get_Sunday(piatek_sniadanie,piatek_drugie_sniadanie,piatek_zupa,piatek_drugie_danie,piatek_kolacja);
    // ------------------------------------------------------------------------------------------------------
    console.log("Poniaedziałek <--- ", NULL_weekly_plansg.Monday);
    console.log("Wtorek <--- ",NULL_weekly_plansg.Tuesday);
    console.log("Sroda <--- ",NULL_weekly_plansg.Wednesday);
    console.log("Czwartek <--- ",NULL_weekly_plansg.Thursday);
    console.log("Piatek <--- ",NULL_weekly_plansg.Friday);
    console.log("Sobota <--- ",NULL_weekly_plansg.Saturday);
    console.log("Niedziela <--- ",NULL_weekly_plansg.Sunday);
    // ------------------------------------------------------------------------------------------------------
    // localStorage.setItem('Plan_Zywienia', JSON.stringify(NULL_weekly_plansg));
    // var plan_tygodnia_localStorage = JSON.parse(localStorage.getItem('Plan_Zywienia'));
    // Lista_planów_w_tygodniu
    Lista_planów_w_tygodniu.push(NULL_weekly_plansg);
    console.log("---------------------------------------------------------------------------------------------")
    console.log("dsasadaad")
    console.log(Lista_planów_w_tygodniu);
})
///Lista plnaów w localStorage
localStorage.setItem('Lista_planów_w_tygodniu', JSON.stringify(Lista_planów_w_tygodniu));
// localStorage.setItem('przepis_skonczony',JSON.stringify(przepis_zobi));
//
//
// var przepis = JSON.parse(localStorage.getItem('przepis_skonczony'));
// console.log(przepis);