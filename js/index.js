


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
<img src = " ' + nounours.imageUrl + ' " class="image-nounours" alt="' + nounours.name + ' " /> \
<figcaption><p>Ref: <span class="ref" > '+ nounours._id +' </span></p><p>' + nounours.name + ' <br> Prix :<span class="prix" > <strong>' + nounours.price/100 + ' €</strong></span></p></figcaption>\
</figure></a></div>';

affichagenounours.appendChild(nounoursaffichage);
}


