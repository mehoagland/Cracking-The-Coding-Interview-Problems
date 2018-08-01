//QUESTION: Given a string, write a function to check if a section of the string could form a palindrome. A palindrome is a word or phrase that is the same forwards and backwords. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

//HINTS: #106, You do not need to, and should not, generate all permutations. This would be very inefficient.
//HINTS: #121, What characteristics would a string that is a permutation of a palindrome have?
//HINTS: #134, Have you tried a hash table? You should be able to get this down to O(N) time.
//HINTS: #136, Can you reduce the space usuage by using a bit vector?

function palinPerm(string) {
  //need to make object for each character.'char'
  var chars = {};
  //need to make 3 variables:
  //one to keep track of palidrome state, if the permutation is a palidrome set to true 'paliPerm'
  var paliPerm = true;
  //one to keep track of the state of if there is more than 1 letter with only 1 of it.'allButOneEven'
  var allButOneEven = false;
  //one to help assign the character to a value.
  var currChar;
  //need to split string and assign each character of string to object with a forEach function 'currChar'=char.toLowerCase

  string.split('').forEach(char => {
    if (char !== ' ') {
      currChar = char.toLowerCase();
      //then we need to add a count to the characters being assigned, if char[currChar] === undefined, then assign 0 to it and increase counter chars[currChar]++;
      if (chars[currChar] === undefined) {
        chars[currChar] = 0;
      }
      chars[currChar]++;
    }
  });

  //loop thru all the keys from the new Object chars
  Object.keys(chars).forEach(char => {
    //if (chars[char] % 2 > 0)
    if (chars[char] % 2 > 0) {
      //then go into another if (allButOneEven) then paliPerm = false;
      if (allButOneEven) {
        paliPerm = false;
      } else {
        allButOneEven = true;
      }
    }
  });
  return paliPerm;
}

console.log(palinPerm('Tact Coa'), 'true');
console.log(palinPerm('Tact boa'), 'false');
