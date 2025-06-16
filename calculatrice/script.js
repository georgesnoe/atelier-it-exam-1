let juger = document.getElementById("juger");
let nombre_1 = document.getElementById("nombre_1");
let nombre_2 = document.getElementById("nombre_2");
let operateur = document.getElementById("operateur");


juger.onclick = () => {
    if (nombre_1.value.trim() == "") {
        afficherErreur_1();
    } else if (nombre_2.value.trim() == "") {
        afficherErreur_2();
    } else {
        switch (operateur.value) {
            case '+':
                break;
            case '-':
                break;
            case '*':
                break;
            case '/':
                break;
        }
        afficherResultat();
    }
}

function afficherErreur_1() { }

function afficherErreur_2() { }

function afficherResultat(expression, resultat) { }