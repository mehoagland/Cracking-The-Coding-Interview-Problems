//QUESTION: Implement an algorithm to determine if a string has all unique characters.
//What if you cannot use additional data structures?

//Hints: #44, Try a hash table??
//Hints: #117, Could a bit vector be useful??
//Hints: #132, Can you solve it in O(N log N) time? What might a solution like that look like?

//this is 0(N^2) bc we have to loop thru string twice. So it takes as long as the string is raised to however many times we re loop over string
function allUniqueChars(string) {
  for (var i = 0; i < string.length; i++) {
    //console.log(8, string[i]);
    for (var j = i + 1; j < string.length; j++) {
      //has to be i + 1 so that we do not check if srting[0] === string[0], bc it is same spot so will be a match
      //console.log(10, string[j]);
      if (string[i] === string[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(allUniqueChars('abcdef'));
