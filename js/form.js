window.onload = () => {

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
		if (validResponses.indexOf(response) != -1) {
			console.log('OK');
			getNextELement(this);
			
		} else {
			console.log('NOOOOPE');
		}
	}

	let getNextELement = function(el){
		let actualStep = el.parentElement;
		console.log(actualStep.nextElementSibling);	
	}
}

