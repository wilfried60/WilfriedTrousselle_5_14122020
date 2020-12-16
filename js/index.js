// on affiche la couleur du panier s'il est plein
let couleur_du_panier = JSON.parse(localStorage.getItem("panier"));

let ourson = ""; 
const affichagenounours = document.querySelector('#nounours');

let request = new XMLHttpRequest();
request.open("GET", "http://localhost:3000/api/teddies/"); // ouverture d'une connexion 
request.responseType = 'json';
request.send(); // envoie de la requête
request.onload = function() {
	if (request.readyState == XMLHttpRequest.DONE && request.status == 200) {
			ourson = request.response;
            console.log(ourson);
            tableauourson(); 

    }
    else{
        alert("Une erreur est survenue");
    }
};

// affichage des résultats dans la page index.html

function tableauourson(){
ourson.forEach(tableaunounours); 
}

function tableaunounours(nounours){

const nounoursaffichage = document.createElement('article');
nounoursaffichage.innerHTML = '<div class="cadre-nounours" > <a href="./products.html?id='+ nounours._id +'" <figure>\
<img src = " ' + nounours.imageUrl + ' " class="image-nounours"> \
<figcaption><p>Ref: <span class="ref" > '+ nounours._id +' </span></p><p>' + nounours.name + ' <br> Prix :<span class="prix" > <strong>' + nounours.price/100 + ' €</strong></span></p></figcaption>\
</figure></a></div>';

affichagenounours.appendChild(nounoursaffichage);
}

// affichage nombre d'article dans le panier sur l'icone panier

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
    couleur_du_panier.forEach(function() {
      ++this.nb_article;
    },  this);
  };
  
  var obj = new Compteur();
  obj.ajouter([]);
  console.log(obj.nb_article);  
  
  nb_Panier.innerHTML = obj.nb_article;
  
  nombre_dans_panier.appendChild(nb_Panier);
      
  
}
