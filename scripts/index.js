(function () {
	const shownPasswordFieldsType = 'shown-passwords';

	let togglePasswordFields = () => {
		if (arePasswordFieldsShown()) {
			hidePasswordFields();
		} else {
			showPasswordFields();
		}
	}

	let showPasswordFields = () => {
		if (doesPageHavePasswordFields()) {
			let passwordFields = document.querySelectorAll('input[type=password]');

			for (let i = 0; i < passwordFields.length; i++) {
				passwordFields[i].type = shownPasswordFieldsType;
			}
		}
	}

	let hidePasswordFields = () => {
			let passwordFields = document.querySelectorAll(`input[type=${shownPasswordFieldsType}]`);

			for (let j = 0; j < passwordFields.length; j++) {
				passwordFields[j].type = 'password';
			}
	}

	let doesPageHavePasswordFields = () => {
		return !!document.querySelector('input[type=password]');
	}

	let arePasswordFieldsShown = () => {
		return !!document.querySelector(`input[type=${shownPasswordFieldsType}]`);
	}

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'togglePasswordFields') {
    	togglePasswordFields();	
    }
  });
})();
