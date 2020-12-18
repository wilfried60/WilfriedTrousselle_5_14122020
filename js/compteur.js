//affichage nombre d'article dans le panier sur l'icone panier
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
  couleur_du_panier.forEach(function(Compteur_panier) {
    this.nb_article += parseFloat(Compteur_panier.quantite) ;
  },
   this);
};

var obj = new Compteur();
obj.ajouter([]);
console.log(obj.nb_article);  

nb_Panier.innerHTML = obj.nb_article;

nombre_dans_panier.appendChild(nb_Panier);
    

}