

// affichage nombre d'article dans le panier sur le l'icon panier

let couleur_du_panier = JSON.parse(localStorage.getItem("panier"));

// affichage nombre d'article dans le panier sur le l'icon panier

let nombre_dans_panier = document.getElementById('nb_panier');
  const nb_Panier = document.createElement('p');

if (couleur_du_panier === null || couleur_du_panier === "undefined"){
  
  nb_Panier.innerHTML = "0";
  
  nombre_dans_panier.appendChild(nb_Panier);

}else{
 
  class Compteur {
    constructor() {
      this.nb_article = 0;
    }
  }
  
    
  Compteur.prototype.ajouter = function() {
    couleur_du_panier.forEach(function(element) {
      ++this.nb_article;
    },  this);
  };
  
  var obj = new Compteur();
  obj.ajouter([]);
  console.log(obj.nb_article);  
  
  nb_Panier.innerHTML = obj.nb_article;
  
  nombre_dans_panier.appendChild(nb_Panier);
      
  
}

// on affiche la confirmation de commande

let confirm_commande = JSON.parse(localStorage.getItem('confirmation'));
console.log(confirm_commande);
let prix_total = JSON.parse(localStorage.getItem('prixtotal'));
console.log(prix_total);

if (confirm_commande === null || confirm_commande === "undefined"){
  
  let confirmation = document.getElementById('confirmation');
let confirm_p = document.createElement('p');

confirm_p.innerHTML = 'Vous n\'avez pas de commande en cours';

confirmation.append(confirm_p);

} else if (prix_total === null || prix_total === "undefined") {
         
  let confirmation = document.getElementById('confirmation');
  let confirm_p = document.createElement('p');
  
  confirm_p.innerHTML = 'Vous n\'avez pas de commande en cours';
  
  confirmation.append(confirm_p);

}else{
let confirmation = document.getElementById('confirmation');
let confirm_p = document.createElement('p');

confirm_p.innerHTML = 'Votre commande n°:<strong> '+ confirm_commande +'</strong> à bien été pris compte par nos services .<br> Le prix total de cette commande est de <strong>'+ prix_total +'€</strong>. <br>\
                        Nous vous remercions pour cette commande.<br> A bientôt ';

confirmation.append(confirm_p);


}


// on vide le localStorage

localStorage.clear();