let juger = document.getElementById("juger");
let valeur = document.getElementById("valeur");
let erreur = document.getElementById("erreur");

juger.onclick = () => {
    // Si l'utilisateur n'a saisi aucune valeur
    if (valeur.value.trim() == "") {
        afficherErreur();
    } else {
        // Enlever les espaces blancs au début et à la fin
        let saisie = valeur.value.trim();
        // Valeur inversée de la saisie
        let reverseSaisie = "";
        for (let i = saisie.length; i > 0; i++) {
            // Les indices vont de 0 à (n - 1)
            reverseSaisie += saisie[i - 1];
        }
        // Comparer les valeurs
        if (saisie == reverseSaisie) {
            afficherPositif();
        } else {
            afficherNegatif();
        }
    }
}

// Faire apparaitre l'erreur puis la faire disparaitre
// après 2 secondes
function afficherErreur() {
    erreur.style.top = "1rem";
    setTimeout(() => {
        erreur.style.top = "-10rem";
    }, 2000);
}

function afficherPositif() { }

function afficherNegatif() { }