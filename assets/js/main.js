let nettoBrutto = document.getElementById("nettoBrutto");
let bruttoNetto = document.getElementById("bruttoNetto");
let hoch = document.getElementById("19");
let niedrig = document.getElementById("7");

let eingabe = document.getElementById("eingabe");



function rechner() {
    if (nettoBrutto.checked && hoch.checked) {
        let bruttoMwstRech = eingabe.value * 0.19;
        let bruttoRech = eingabe.value * 1.19;
        mwst.innerHTML = "Mehrwertsteuerbetrag: " + bruttoMwstRech.toFixed(2) + " €";
        brutto.innerHTML = "Bruttobetrag (Endpreis): " + bruttoRech.toFixed(2) + " €";
    } else if (nettoBrutto.checked && niedrig.checked) {
        let bruttoMwstRech = eingabe.value * 0.07;
        let bruttoRech = eingabe.value * 1.07;
        mwst.innerHTML = "Mehrwertsteuerbetrag: " + bruttoMwstRech.toFixed(2) + " €";
        brutto.innerHTML = "Bruttobetrag (Endpreis): " + bruttoRech.toFixed(2) + " €";
    } else if (bruttoNetto.checked && hoch.checked) {
        let nettoMwstRech = eingabe.value / 119 * 19;
        let nettoRech = eingabe.value / 1.19;
        mwst.innerHTML = "Mehrwertsteuerbetrag: " + nettoMwstRech.toFixed(2) + " €";
        netto.innerHTML = "Nettobetrag (Endpreis): " + nettoRech.toFixed(2) + " €";
    } else if (bruttoNetto.checked && niedrig.checked) {
        let nettoMwstRech = eingabe.value / 107 * 7;
        let nettoRech = eingabe.value / 1.07;
        mwst.innerHTML = "Mehrwertsteuerbetrag: " + nettoMwstRech.toFixed(2) + " €";
        netto.innerHTML = "Nettobetrag (Endpreis): " + nettoRech.toFixed(2) + " €";
    }
}