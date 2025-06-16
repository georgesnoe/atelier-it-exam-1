#include <iostream>

int main()
{
    float nombre_1, nombre_2, resultat;
    char operateur;

    std::cout << "Programme de calculatrice basique" << std::endl;
    std::cout << std::endl
              << std::endl;
    std::cin.clear();
    std::cout << "Veuiller entrer le premier nombre : ";
    std::cin >> nombre_1;
    std::cin.clear();
    std::cout << "Veuiller entrer le deuxieme nombre : ";
    std::cin >> nombre_2;
    std::cin.clear();
    std::cout << "Veuiller entrer l'opérateur (+, -, *, /) : ";
    std::cin >> operateur;
    std::cin.clear();

    switch (operateur)
    {
    case '+':
        resultat = nombre_1 + nombre_2;
        break;
    case '-':
        resultat = nombre_1 - nombre_2;
        break;
    case '*':
        resultat = nombre_1 * nombre_2;
        break;
    case '/':
        resultat = nombre_1 / nombre_2;
        break;
    default:
        std::cout << std::endl
                  << "Une erreur s'est produite" << std::endl;
        return -1;
        break;
    }

    std::cout << std::endl
              << std::endl;
    std::cout << "Le résultat de " << nombre_1 << " " << operateur << " " << nombre_2 << " = " << resultat << std::endl;

    return 0;
}