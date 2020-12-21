
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

}else{
let confirmation = document.getElementById('confirmation');
let confirm_p = document.createElement('p');

confirm_p.innerHTML = 'Votre commande n°:<strong> '+ confirm_commande +'</strong> à bien été pris compte par nos services .<br> Le prix total de cette commande est de <strong>'+ prix_total +'€</strong>. <br>\
                        Nous vous remercions pour cette commande.<br> A bientôt ';

confirmation.append(confirm_p);


}


// on vide le localStorage

localStorage.clear();

