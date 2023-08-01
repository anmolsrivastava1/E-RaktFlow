import validator from 'validator';

// Input Validator
module.exports = {
  isNameValid: name => {
    if (
      name === null ||
      validator.isEmpty(name, {ignore_whitespace: true}) ||
      /\d/.test(myString) // contains number
    ) {
      return false;
    }

    return true;
  },
  isAgeValid: age => {
    if (age === null) {
      return false;
    }
    return true;
  },
};
