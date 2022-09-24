/* eslint-disable no-unused-vars */
const { SPANISH_DICTIONARY, SHOE_LIST } = require('./constants.js');

const newSneakers = (sneakers) => {
  return ("New sneakers " + sneakers + " dropping soon!");
};

const isThatMichaelJordan = (name) => {
  if(name.toLowerCase() == "michael jordan")
    return true;
  else
    return false;
};

const areYouM = (name) => {
  if(name[0].toLowerCase() == 'm')
    return true;
  return false;
};

const mostViewsThreeSneakers = (sneakerOneViews, sneakerTwoViews, sneakerThreeViews) => {
  a = [shoe1,shoe2,shoe3]
  a.sort();
  return a[2];
};

const mostViews = (sneakerViews) => {
  arr.sort();
  return arr[arr.length-1]
};

const validateEmail = (email) => {
  // insert code
};

const validateEmailWithError = (email) => {
  // insert code
};

const getInitials = (name) => {
  // insert code
};

const howRepetitiveAreYou = (str, word) => {
  // insert code
};

const spanishToEnglish = (spanish) => {
  const dictionary = SPANISH_DICTIONARY;
  // insert code
};

const getNames = (shoeList = SHOE_LIST) => {
  // insert code
};

const getUniqueSneakers = (shoeList = SHOE_LIST) => {
  // insert code
};

const getMostViewedSneakers = (shoeList = SHOE_LIST) => {
  // insert code
};

module.exports = {
  newSneakers,
  isThatMichaelJordan,
  areYouM,
  mostViewsThreeSneakers,
  mostViews,
  validateEmail,
  validateEmailWithError,
  getInitials,
  howRepetitiveAreYou,
  spanishToEnglish,
  getNames,
  getUniqueSneakers,
  getMostViewedSneakers,
};
