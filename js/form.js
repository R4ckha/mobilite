window.onload = () => {

	// Selection du bouton suivant
	let nextButton = document.querySelector('.next-button'),
		buttonParent = nextButton.parentElement.parentElement;

	let situation = document.querySelector('#situation');

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
			console.log('OK bitch');
		} else {
			console.log('NOOOOPE');
		}
	}
	/*
	// On désactive la fonction initial des liens pour en faire des boutons
	for (var i = 0; i < buttonCollection.length; i++) {
		buttonCollection[i].addEventListener('click', function (e) {
			e.preventDefault();
			console.log("lien bloqué");
		});
	}
	*/

}