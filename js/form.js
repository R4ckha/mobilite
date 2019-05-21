window.onload = () => {

	// ON AS COMPLETEMENT OUBLIE DE RECUPERER LES DONNEES DU FORMULAIRE :D
	
	// Selection du bouton suivant
	let nextButton = document.querySelector('#next-button'),
		situation = document.querySelector('#situation'),
		buttonParent = nextButton.parentElement.parentElement;

	// On écoute l'evenement 'click' sur le bouton
	nextButton.addEventListener('click', function(event){
		// Puis on inhibe son comportement par defaut 
		event.preventDefault();
		// Et on cache le bloc pour passer au suivant
		buttonParent.style.display = "none";
		buttonParent.nextElementSibling.style.display = "flex";
	});

	situation.onchange = function(){
		let options = this.getElementsByTagName("option"),
			response = options[this.selectedIndex].innerHTML;
		
		let validResponses = new Array("Célibataire","Marié","Veuf","Divorcé");
		if ( validResponses.indexOf(response) != -1 ) {
			displayNextELement(this);	
		} else {
			displayErrorMessage();
		}
	}

	let displayNextELement = function(el){
		let actualStep = el.parentElement;
		actualStep.style.display = "none";
		actualStep.nextElementSibling.style.display = "flex";	
	}

	let displayErrorMessage = function(){
		
	}
}

