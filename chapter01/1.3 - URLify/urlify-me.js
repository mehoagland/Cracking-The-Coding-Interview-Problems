//QUESTION: Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficent space at the end to hokd the additional characters, and that you are given the "true" length of the string.

//HINTS: #53, It is often easiest to modify strings by going from the end of the string to the beginning.

//HINTS: #118, You might find you need to know the number of spaces. Can you just count them?

function urlify(string, length) {
  var sent = '';
  var stringSplit = string.split('');
  for (var i = 0; i <= length - 1; i++) {
    if (i === i) {
      sent += stringSplit[i];
    }
  }
  return sent.split(' ').join('%20');
}

//console.log(urlify('Mr John Smith    ', 13));
