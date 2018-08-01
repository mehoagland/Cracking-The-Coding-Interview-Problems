//QUESTION: Given two strings, write a method to decide if one is a permutation of the other

//Hints: #1, Describe what it means for two strings to be permutations of each other. Now, look at that defintion you provided. Can you check the strings against that definition??
//Permuation is can you find a matching order combonation from one string from another string
//Hints: #84, There is one solution that is 0(N log N) time. Another solution uses some space, but is 0(N) time.
//Hints: #122, Could a hash table be useful??
//Hints: #131, Two strings that are permutations should have the same characters, but in different orders. Can you make the orders the same?

function checkPermute(stringOne, stringTwo) {
  if (stringOne.length !== stringTwo.length) {
    return false;
  }
  var stringOneSort = stringOne
    .split('')
    .sort()
    .join('');

  var stringTwoSort = stringTwo
    .split('')
    .sort()
    .join('');
  //console.log(stringOneSort, stringTwoSort);

  return stringOneSort === stringTwoSort; //i had this in an if statement and kept getting undefined for the last test case. I think this was happening bc it was going right to the second if and not sorted the strings yet, so once it got to the stringOneSort var it didnt know what it was yet and kicked back undefined.
}

console.log(checkPermute('afc', 'fac'), true);
console.log(checkPermute('aba', 'aab'), true);
console.log(checkPermute('aba', 'aaba'), false);
console.log(checkPermute('aca', 'aba'), false);
