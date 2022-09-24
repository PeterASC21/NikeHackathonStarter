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
  if (email.includes("@"))
   b = email[email.length-4] + email[email.length-3] + email[email.length-2] + email[email.length-1];
  console.log(b)
    if (b == ".com" || b == ".edu"|| b == ".net"|| b == ".org")
      if (email[0]!='@')
        return true
  return false
};

const validateEmailWithError = (email) => {
  if (email.includes("@"))
  {
    b = email[email.length-4] + email[email.length-3] + email[email.length-2] + email[email.length-1];
    if (b == ".com" || b == ".edu"|| b == ".net"|| b == ".org")
    {
      if (email[0]!='@')
        return true
      else
        console.log("Invalid email: missing recipient name")
    }
    else
      console.log("Invalid email: email address should end with .com, .edu, .net, or .org")
  }
  else
        console.log("Invalid Email: Missing @ symbol")
  return false
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
