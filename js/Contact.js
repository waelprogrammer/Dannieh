function validateForm() {
  let txtName           = document.getElementById("txtName");
  let elmNameError      = document.getElementById("elmNameError");

  let txtZipcode        = document.getElementById("txtZipcode");
  let elmZipcodeError   = document.getElementById("elmZipcodeError");

  let selCountry        = document.getElementById("selCountry");
  let elmCountryError   = document.getElementById("elmCountryError");

  let elmGenderError    = document.getElementById("elmGenderError");
  let elmColorError     = document.getElementById("elmColorError");

  let txtPhone          = document.getElementById("txtPhone");
  let elmPhoneError     = document.getElementById("elmPhoneError");

  let txtEmail          = document.getElementById("txtEmail");
  let elmEmailError     = document.getElementById("elmEmailError");

  let txtPassword       = document.getElementById("txtPassword");
  let elmPasswordError  = document.getElementById("elmPasswordError");

  let txtPWVerified     = document.getElementById("txtPWVerified");
  let elmPWVerifiedError = document.getElementById("elmPWVerifiedError");

  // Run validations
  return (
    isNotEmpty(txtName, "Please enter your name!", elmNameError) &&
    isNumeric(txtZipcode, "Please enter a 5-digit zip code!", elmZipcodeError) &&
    isLengthMinMax(txtZipcode, 5, 5, "Please enter a 5-digit zip code!", elmZipcodeError) &&
    isSelected(selCountry, "Please make a selection!", elmCountryError) &&
    isChecked("gender", "Please check a gender!", elmGenderError) &&
    isChecked("color", "Please check a color!", elmColorError) &&
    isNumeric(txtPhone, "Please enter a valid phone number!", elmPhoneError) &&
    isValidEmail(txtEmail, "Enter a valid email!", elmEmailError) &&
    isValidPassword(txtPassword, "Password shall be 6-8 characters!", elmPasswordError) &&
    verifyPassword(txtPassword, txtPWVerified, "Different from new password!", elmPWVerifiedError)
  );
}


function validate(isValid, errMsg, errElm, inputElm) {
  if (!isValid) {
    if (errElm && errMsg) {
      $(errElm).html(errMsg);
    }
    if (inputElm) {
      $(inputElm).addClass("errorBox").focus();
    }
  } else {
    if (errElm) {
      $(errElm).html("");
    }
    if (inputElm) {
      $(inputElm).removeClass("errorBox");
    }
  }
}

function isNotEmpty(inputElm, errMsg, errElm) {
  var inputValue = inputElm.value.trim();
  var isValid;
  if (inputValue === "") {
    isValid = false;
  } else {
    isValid = true;
  }
  validate(isValid, errMsg, errElm, inputElm);
  return isValid;
}

function isNumeric(inputElm, errMsg, errElm) {
  var inputValue = inputElm.value.trim();
  var isValid;
  if (inputValue.match(/^\d+$/) !== null) {
    isValid = true;
  } else {
    isValid = false;
  }
  validate(isValid, errMsg, errElm, inputElm);
  return isValid;
}

function isAlphabetic(inputElm, errMsg, errElm) {
  var inputValue = inputElm.value.trim();
  var isValid;
  if (inputValue.match(/^[a-zA-Z]+$/) !== null) {
    isValid = true;
  } else {
    isValid = false;
  }
  validate(isValid, errMsg, errElm, inputElm);
  return isValid;
}

function isAlphanumeric(inputElm, errMsg, errElm) {
  var inputValue = inputElm.value.trim();
  var isValid;
  if (inputValue.match(/^[0-9a-zA-Z]+$/) !== null) {
    isValid = true;
  } else {
    isValid = false;
  }
  validate(isValid, errMsg, errElm, inputElm);
  return isValid;
}

function isLengthMinMax(inputElm, minLength, maxLength, errMsg, errElm) {
  var inputValue = inputElm.value.trim();
  var isValid;
  if (inputValue.length >= minLength && inputValue.length <= maxLength) {
    isValid = true;
  } else {
    isValid = false;
  }
  validate(isValid, errMsg, errElm, inputElm);
  return isValid;
}

function isValidEmail(inputElm, errMsg, errElm) {
  var inputValue = inputElm.value.trim();
  var isValid;
  if (inputValue.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) !== null) {
    isValid = true;
  } else {
    isValid = false;
  }
  validate(isValid, errMsg, errElm, inputElm);
  return isValid;
}

function isSelected(selectElm, errMsg, errElm) {
  var isValid;
  if (selectElm.value === "") {
    isValid = false;
  } else {
    isValid = true;
  }
  validate(isValid, errMsg, errElm, selectElm);
  return isValid;
}

function isChecked(inputName, errMsg, errElm) {
  var elms = document.getElementsByName(inputName);
  var isChecked = false;
  for (var i = 0; i < elms.length; ++i) {
    if (elms[i].checked) {
      isChecked = true;
      break;
    }
  }
  validate(isChecked, errMsg, errElm, null);
  return isChecked;
}

function isValidPassword(inputElm, errMsg, errElm) {
  var inputValue = inputElm.value.trim();
  var isValid;
  if (inputValue.match(/^\w{6,8}$/) !== null) {
    isValid = true;
  } else {
    isValid = false;
  }
  validate(isValid, errMsg, errElm, inputElm);
  return isValid;
}

function verifyPassword(pwElm, pwVerifiedElm, errMsg, errElm) {
  var isTheSame;
  if (pwElm.value === pwVerifiedElm.value) {
    isTheSame = true;
  } else {
    isTheSame = false;
  }
  validate(isTheSame, errMsg, errElm, pwVerifiedElm);
  return isTheSame;
}

function clearForm() {
  var elms = document.querySelectorAll(".errorBox");
  for (var i = 0; i < elms.length; i++) {
    elms[i].classList.remove("errorBox");
  }

  elms = document.querySelectorAll('[id$="Error"]');
  for (var i = 0; i < elms.length; i++) {
    elms[i].innerHTML = "";
  }

  document.getElementById("txtName").focus();
}
