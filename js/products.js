
let couleur_du_panier = JSON.parse(localStorage.getItem("panier"));
const affichagenounours = document.getElementById('nounours');
const search_params = new URLSearchParams(window.location.search); 
const id = search_params.get('id');

// on va chercher l'URL de l'api avec l'id du nounours choisi.
const Urlapi = "http://localhost:3000/api/teddies/" + id; 

let requeteApi = function (url) {

    // envoie d'une promesse
    return new Promise(function (resolve, reject) {
      let requete = new XMLHttpRequest()
      requete.open('GET', url, true);
      requete.onreadystatechange = function () {
        if (requete.readyState == 4) {
           if(requete.status == 200)
             resolve(requete.responseText);
           else
             reject(requete);
        }
      }; 
      requete.send(null)
    })
  }

  requeteApi(Urlapi)
  
    // Le serveur répond
  .then(function (response) {
   let parsenounours = JSON.parse(response); 
   console.log(parsenounours);


   //on affiche le nounours choisie 
   const nounoursaffichage = document.createElement('article');

      nounoursaffichage.innerHTML = '<div class="cadre-nounours id="couleur_ted"><figure>\
      <img src = " ' + parsenounours.imageUrl + ' " class="image-nounours" alt="' + parsenounours.name + ' " > \
      <figcaption><p>' + parsenounours.name + '<br><p>Ref: <span class="ref" > '+ parsenounours._id +' </span></p>Prix :<span class="prix" > <strong>' + parsenounours.price/100 + ' €</strong></span></p>\
      <form><p>Couleur</p>\
      <select id="couleur">\
      </select> <p><br>Quantité:</p>\
       <select id="qte">\
      </select><br><br>\
      </form>\
      <button id="bouton" class="ajout-panier"  >Ajouter au panier</button>\
      </figcaption>\
     </figure></div>';
   affichagenounours.appendChild(nounoursaffichage);

     ///////////////////////////////////// 

    const couleur = parsenounours.colors;
          let opt_div = document.getElementById("couleur");
          let qte_div = document.getElementById("qte");

      // on affiche les options couleur
     for (let i = 0; i < couleur.length; i++) {
      let opt = document.createElement("option");
      opt.innerText = couleur[i];
      opt.value = couleur[i];
      opt_div.append(opt);
      console.log(couleur[i]);
     };
     
      // on affiche les options quantité
     for (let qte = 1; qte <= 100; qte++) {
      let qte_achat = document.createElement("option");
      qte_achat.innerText = qte;
      qte_achat.value = qte;
      qte_div.append(qte_achat);
      console.log(qte);
     };

    ///on rempli le panier en cliquant sur le bouton "ajouter au panier//
    let bouton = document.getElementById('bouton');
    
    bouton.addEventListener("click",()=>{
      // on enregistre l'article dans local storage
      if (typeof localStorage != "undefined"){
        let nounours_article = JSON.parse(localStorage.getItem("panier"));
        if ( nounours_article === null || nounours_article === "undefined") {
          nounours_article = [];
        } 
        let nouveau_produit = true;
       
        // vérifie si le produit n'est pas dans le panier
        nounours_article.forEach(function(prod) {
            //  on incrémente la quantité si le produit est présent
            if (prod.id == id && prod.couleur === document.getElementById("couleur").value ) {
              nouveau_produit = false;  
                prod.couleur = document.getElementById("couleur").value;
                prod.quantite = document.getElementById("qte").value; 
            }
        });
    
        // si le produit est nouveau on l'ajoute 
       

       if (nouveau_produit) {
        
        nounours_article.push(
          { 
          name : parsenounours.name,
          id : parsenounours._id,
          prix : parsenounours.price/100,
          image : parsenounours.imageUrl,
          couleur : document.getElementById("couleur").value,
          quantite : document.getElementById("qte").value,
          prix_total : parsenounours.price/100 * document.getElementById("qte").value,
          key_id: parsenounours.id }
          );
      } 
     
        localStorage.setItem("panier", JSON.stringify(nounours_article));
       
        nounoursaffichage.innerHTML = '<div class="cadre-nounours-valid" id="couleur_ted">Votre article est bien ajouté! <br>\
        <br> Voulez-vous poursuivre vos achats? <br>\
       <form action="./index.html"> <input type="submit" class="choix_oui" value="oui"></form> <form action="./panier.html"> <input type="submit" class="choix_non" value="non"></form></div>';
     affichagenounours.appendChild(nounoursaffichage);

        
      }else{
        alert("Un probleme est survenue");
        
      }
    });
     


  })

   // Le serveur ne répond pas
   .catch(function () {
    alert("Un problème est survenue, veuillez revenir plus tard");
   
  })

  
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


  
  
 



  
 





   
    