export const validateRequestMessage = (
  email,
  phonenumber,
  title,
  message,
  errorMessage
) => {
  if (
    validateEmail(email, errorMessage) &&
    validatePhonenumber(phonenumber, errorMessage) &&
    validateTitle(title, errorMessage) &&
    validateMessage(message, errorMessage)
  ) {
    return true;
  }
  return false;
};

export const validateEmail = (email, errorMessage) => {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  } else {
    errorMessage = "Feil i epost input..";
    return false;
  }
};

export const validatePhonenumber = (number, errorMessage) => {
  var phoneno = /^\d{8}$/;

  if (phoneno.test(number)) {
    return true;
  } else {
    errorMessage =
      "Telefonnummer er ikke gyldig.. må være 99494039 eller lignende";

    return false;
  }
};

export const validateTitle = (title, errorMessage) => {
  if (title.length < 3) {
    errorMessage = "Tittel er ugyldig! må være lengre enn 3 bokstaver..";
    return false;
  } else {
    return true;
  }
};

export const validateMessage = (message, errorMessage) => {
  if (message.length < 10) {
    errorMessage = "Meldingen er ugyldig! må være lengre enn 10 bokstaver..";
    return false;
  } else {
    return true;
  }
};
