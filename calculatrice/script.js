let juger = document.getElementById("juger");
let nombre_1 = document.getElementById("nombre_1");
let nombre_2 = document.getElementById("nombre_2");
let operateur = document.getElementById("operateur");
let jugement = document.getElementById("jugement");


juger.onclick = () => {
    let resultat = 0;
    let op = "";
    if (nombre_1.value.trim() == "") {
        afficherErreur_1();
    } else if (nombre_2.value.trim() == "") {
        afficherErreur_2();
    } else {
        switch (operateur.value) {
            case '+':
                op = "+";
                resultat = parseFloat(nombre_1) + parseFloat(nombre_2);
                break;
            case '-':
                op = "-";
                resultat = parseFloat(nombre_1) - parseFloat(nombre_2);
                break;
            case '*':
                op = "*";
                resultat = parseFloat(nombre_1) * parseFloat(nombre_2);
                break;
            case '/':
                op = "/";
                resultat = parseFloat(nombre_1) / parseFloat(nombre_2);
                break;
        }
        afficherResultat(`${nombre_1} ${op} ${nombre_2}`, resultat);
    }
}

function afficherErreur_1() { }

function afficherErreur_2() { }

function afficherResultat(expression, resultat) {
    jugement.innerHTML = `
        <p>Le résultat de ${expression} = ${resultat}</p>
    `;
}