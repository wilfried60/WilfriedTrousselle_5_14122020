//// récuperation du panier dans local storage
  let couleur_du_panier = JSON.parse(localStorage.getItem("panier"));
  if (couleur_du_panier === null || couleur_du_panier === "undefined"){
    couleur_du_panier = [];
  }else{
  }
  couleur_du_panier.forEach(function(nounours, index) {
  const affichage_du_panier = document.getElementById('panier');
  const nounoursaffichage = document.createElement('article');
  nounoursaffichage.innerHTML = '<table><tr>\
  <td><a href="./products.html?id='+ nounours.id +'">' + nounours.name + '<hr>' + nounours.couleur + '</a></td>\
  <td><a href="./products.html?id='+ nounours.id +'"> <img src = " ' + nounours.image + ' " class="image-panier"></a></td> \
  <td style="text-align:right"><a href="./products.html?id='+ nounours.id +'">Qté<br> <strong>' + nounours.quantite + ' </strong></a></td>\
   <td style="text-align:right"><a href="./products.html?id='+ nounours.id +'">Prix<br> <strong>' + nounours.prix * nounours.quantite + ' €</strong></a></td>\
   <td style="text-align:right"><button id="'+ index +'-'+ nounours.id +'">X</button><td>\
  </tr></table>';
  affichage_du_panier.appendChild(nounoursaffichage);
   
// récupération du clic sur la croix (supprimer)
let sup = document.getElementById(index +'-'+ nounours.id);
let message_p = document.createElement('p');
sup.addEventListener("click",function(){

  message_p.innerHTML = 'voulez-vous vraiment supprimer cette article?\
 <button id="ouinon" class="choix_oui"><a href="./panier.html">Oui</a></button> \
 <a href="./panier.html"><button  class="choix_non">Non</button></a>';

 let sup_oui = document.getElementById('ouinon');
 sup_oui.addEventListener("click",function(){
    console.log (index +'-'+ nounours.id)

        // On supprime le tableau en récupérant l'index correspondant à l'ID de l'article
            couleur_du_panier.splice(index,1);
   
            // On renvoie le nouveau tableau dans localStorage
    localStorage.setItem("panier", JSON.stringify(couleur_du_panier));
  
 });

});

affichage_du_panier.appendChild(message_p);

  });
     
  // calcul du prix total du panier et du nombre d'article
  
  class Compteur {
  constructor() {
    this.prixtotal = 0;
    this.nb_article = 0;
  }
}
  
Compteur.prototype.ajouter = function() {
  couleur_du_panier.forEach(function(element) {
    this.prixtotal += element.prix * element.quantite;
    ++this.nb_article;
  },  this);
};

var obj = new Compteur();
obj.ajouter([]);
console.log(obj.prixtotal); 
console.log(obj.nb_article);  
    
    const total_prix = document.getElementById('total_prix');
    const total_prix_p = document.createElement('p');
  
    total_prix_p.innerHTML = '<table><tr><td style="text-align:right"><strong>Prix total: '+ obj.prixtotal +' € </strong></td></tr></table>';
     
    localStorage.setItem('prixtotal', JSON.stringify(obj.prixtotal));
    total_prix.appendChild(total_prix_p);
  
  
//// si le panier est vide, affichage du bouton "retour à la page d'acceuil"
let text_validation = document.getElementById('validation-panier');
let article_balise = document.createElement('article');
  

if (couleur_du_panier.length === 0 || couleur_du_panier === null){
 text_validation.innerHTML = '<P class="panier_vide_p">Votre panier ne contient aucun article! </p>\
<form action="./index.html"> <input type="submit" class="ajout-panier" value="Retour accueil"></form>';
}else{
  text_validation.innerHTML = '<P class="panier_plein_p">Veuillez vérifier votre panier avant de valider. </p>\
  <button  id="validation_panier" class="ajout-panier" >Valider</button>';
  

  


// Validation du panier avec affichage du formulaire
let valid = document.getElementById('validation_panier')
valid.addEventListener("click",() => {
  let form = document.getElementById('form');
  let form_create = document.createElement('div');
   form_create.innerHTML = '<div id="formulaire" >\
   \
  <label for="nom">Nom:</label><br>\
  <input type="text class="text" name="nom" id="nom" required>\
  <span id="nomabsent"></span><br>\
  \
  <label for="Prenom">Prénom:</label><br>\
  <input type="text class="text" name="prenom" id="prenom" required>\
  <span id="prenomabsent"></span><br>\
  \
  <label for="email">Email :</label><br>\
  <input type="email" class="text" name="email" id="mail" required>\
  <span id="mailabsent"></span><br>\
  \
  <label for="adresse">Adresse :</label><br>\
  <input type="text" class="text" name="adresse" id="adresse" required>\
  <span id="adresseabsent"></span><br>\
  \
  <label for="ville">Ville :</label><br>\
  <input type="text" class="text" name="adresse" id="ville" required>\
  <span id="villeabsent"></span><br>\
  \
  <button class="ajout-panier" id="envoi" value="Confirmer_mon_achat">Confirmer mon achat</button>\
  \
</div>';

text_validation.innerHTML = '';
  

  form.append(form_create);

  // validation du formulaire 
let ville = document.getElementById('ville');
let villeabsent = document.getElementById('villeabsent');
let adresse = document.getElementById('adresse');
let adresseabsent = document.getElementById('adresseabsent');
let mail = document.getElementById('mail');
let mailabsent = document.getElementById('mailabsent');
let prenom = document.getElementById('prenom');
let prenomabsent = document.getElementById('prenomabsent');
let confirm_bouton = document.getElementById('envoi');
let nom = document.getElementById('nom');
let nomabsent = document.getElementById('nomabsent');
let nomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
let prenomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

confirm_bouton.addEventListener("click",function(event){
    //Il n'y a aucune valeur dans le champ (nom)
    if (nom.validity.valueMissing ){
        event.preventDefault();
        nomabsent.textContent = '! Requis';
        nomabsent.style.color = 'red';

    //la valeurs est incorrect
    }else if (nomValid.test(nom.value) == false){
        event.preventDefault();
        nomabsent.textContent = 'Format incorrect';
        nomabsent.style.color = 'red';
    //Il n'y a aucune valeur dans le champ (prenom)
    }else if (prenom.validity.valueMissing ){
          event.preventDefault();
          prenomabsent.textContent = '! Requis';
          prenomabsent.style.color = 'red';
  
      //la valeurs est incorrect
      }else if (prenomValid.test(prenom.value) == false){
          event.preventDefault();
          prenomabsent.textContent = 'Format incorrect';
          prenomabsent.style.color = 'red';
        
         //Il n'y a aucune valeur dans le champ (mail)
        }else if (mail.validity.valueMissing ){
          event.preventDefault();
          mailabsent.textContent = '! Requis';
          mailabsent.style.color = 'red';

         //Il n'y a aucune valeur dans le champ (adresse)
       }else if (adresse.validity.valueMissing ){
          event.preventDefault();
          adresseabsent.textContent = '! Requis';
          adresseabsent.style.color = 'red';

         //Il n'y a aucune valeur dans le champ (ville)
       }else if (ville.validity.valueMissing ){
            event.preventDefault();
            villeabsent.textContent = '! Requis';
            villeabsent.style.color = 'red';
    }else{ 
         
      let recup_input = document.getElementsByTagName('input');

      let contact = {
        firstName: recup_input[0].value,
        lastName: recup_input[1].value,
        address: recup_input[3].value,
        city: recup_input[4].value,
        email: recup_input[2].value,
  
         
        }
  

  // On récupère les coordonnées

console.log(contact);



let recup_panier = JSON.parse(localStorage.getItem('panier'));

let products = [];

 for (const panier_article of recup_panier){

     products.push(panier_article.id)
 
 }

 let classement_donnees = {contact, products};
    console.log(classement_donnees);
    
      // on fait une requete post
      let promise = fetch("http://localhost:3000/api/teddies/order", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json" 
        },
        body: JSON.stringify(classement_donnees),
    });
   
    // affichage de la reponse
    promise.then(async response => {
     
     console.log(response);
     let confirm = await response.json();
     console.log(confirm);
     let idcommande = confirm.orderId;
     console.log(idcommande);

     if (typeof localStorage != "undefined"){
       localStorage.setItem('confirmation', JSON.stringify(idcommande));
       localStorage.removeItem('panier');
       window.location.href = "valide.html";
     }else{
      alert("Impossible d'utiliser localStorage");
     }
  })
  
    .catch(err => {
       alert("Un problème est survenue, veuillez revenir plus tard");
  });

 
}

}); 
  
      
});

} 
 

text_validation.append(article_balise);


// affichage nombre d'article dans le panier sur le l'icone panier

let nombre_dans_panier = document.getElementById('nb_panier');
const nb_Panier = document.createElement('p');

if (couleur_du_panier === null || couleur_du_panier === "undefined"){

nb_Panier.innerHTML = "";

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
