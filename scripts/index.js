(function () {
  const shownPasswordFieldsType = 'shown-password';
  const hiddenPasswordFieldsType = 'password';
  const shownPasswordFieldsSelector = `input[type=${shownPasswordFieldsType}]`;
  const hiddenPasswordFieldsSelector =  `input[type=${hiddenPasswordFieldsType}]`;
  const fieldTypeSelectors = {
    [shownPasswordFieldsType]: shownPasswordFieldsSelector,
    [hiddenPasswordFieldsType]: hiddenPasswordFieldsSelector
  };

  let doesPageHavePasswordFields = () => !!document.querySelector(hiddenPasswordFieldsSelector) || !!document.querySelector(shownPasswordFieldsSelector);
  let arePasswordFieldsShown = () => !!document.querySelector(shownPasswordFieldsSelector);

  let togglePasswordFields = () => {
    if (doesPageHavePasswordFields()) {
      let [oldFieldType, newFieldType] = arePasswordFieldsShown() ? [shownPasswordFieldsType, hiddenPasswordFieldsType] : [hiddenPasswordFieldsType, shownPasswordFieldsType];

      changePasswordsFieldsType(oldFieldType, newFieldType);
    }
  }

  let changePasswordsFieldsType = (oldFieldType, newFieldType) => {
    let passwordFields = document.querySelectorAll(fieldTypeSelectors[oldFieldType]);

    for (let i = 0; i < passwordFields.length; i++) {
      passwordFields[i].type = newFieldType;
    }
  }

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'togglePasswordFields') {
      togglePasswordFields();
    }
  });
})();
