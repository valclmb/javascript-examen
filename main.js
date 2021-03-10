"use strict";

/*************************
 * VARIABLES GLOBALES
 ************************/
let meals = ["Fondue bourguignonne",//Tableau des plats
"Courgettes farcies",
"Couscous",
"Falafels",
"Poké bowl",
"Buddha bowl",
"Pizza",
"Beurek",
"Keuftés",
"Pâtes roquefort"]


function addFood(){//Ajouter un plat à la liste

    

    let saisi = document.querySelector("input[type=text]").value.trim()//Prend la valeur du input 

    if(saisi.length == 0){//Si le champ saisi est égale à 0 -> erreur sinon ajout d'une li à la ul de #meals

        alert("Vous n'avez rien saisi 😱")
    }else{
        alert(`${saisi} à bien été ajouté au menu !`)

        document.querySelector("#meals ul").innerHTML += `<li>${saisi}</li>`//Ajouter le saisi a l'affichage

        meals.push(saisi);//Rajouter la saisi dans le tableau (sert a incrémenter le compteur)

        startFood();//Refresh l'affichage et le compteur 
    }
    
    
    document.querySelector("form").reset();//selectionne le input 
};



function startFood(){//Fonction qui se lance au chargement qui affiche les plats
   


    document.querySelector("#meals").innerHTML =`<h3>Il y a ${meals.length} plats au menu</h3><ul></ul>`//Cible la div #meals et ajoute une ul
    
    for(let i=0;i<meals.length;i++){//Boucle sur le tableau et viens ajouter une li sur la page web a chaque itération

        document.querySelector("#meals ul").innerHTML += `<li> ${meals[i]} </li>`

    }   
}

/**********************************
 * CODE PRINCIPAL
 **********************************/
window.addEventListener("DOMContentLoaded", function(){//Le Js se charge seulement quand le HTML l'est 
   
    startFood();

    document.querySelector("input[type=button]").addEventListener("click",addFood)
    

  });