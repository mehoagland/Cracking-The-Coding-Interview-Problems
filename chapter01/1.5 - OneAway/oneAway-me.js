//QUESTION: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit, (or zero edits) away.

function oneAway(string1, string2) {
  //check if one character is missing function, one has to have one less character otherwise return false
  function checkOneMissing(first, second) {
    if (first.length !== second.length - 1) {
      return false;
    } else {
      //have to have variable starting at false
      var mulligan = false;
      //make counters for first and second string and set to 0
      var fp = 0;
      var sp = 0;
      //while first string counter is less than first string length
      while (fp < first.length) {
        //check to see if first[counter] !== second[counter2]
        if (first[fp] !== second[sp]) {
          //and if (variable) is true, then return false
          if (mulligan) {
            return false;
          } else {
            //else the variable set to true and increase the second string counter (bc one is longer)
            mulligan = true;
            sp++;
          }
        } else {
          //else increase both counters
          sp++;
          fp++;
        }
        //at end of first else which includes the while return true bc if all characters equal each other then it is true
      }
      return true;
    }
  }
  //check if one character is different function, this has to be the same length (first, second)
  function checkDiff(first, second) {
    //if length is not the the same, then return false (has to be the same length, if not return false)
    if (first.length !== second.length) {
      return false;
    } else {
      //else make fp and sp counter starting at 0 and variable to keep track of condistion of actual word called mulligan, start it at false.
      var fp = 0;
      var sp = 0;
      var mulligan = false;
      while (fp < first.length) {
        //while fp is smaller than first, check to see if first[fp] and second[sp] are NOT the same
        if (first[fp] !== second[sp]) {
          //if the are not the same and if mulligan is true, return false
          if (mulligan) {
            return false;
          } else {
            //else set mulligan to true and right inside the while loop, increase sp and fp, right outside the while loop (if everything is equal that means, return true)
            mulligan = true;
          }
        }
        sp++;
        fp++;
      }
      return true;
    }
  }
  //within the entire Function, use the helper fucntions u made and test string1 and string2 in all functions with and ||, test string1 and string2 flipped in one character missing function

  return (
    checkOneMissing(string1, string2) ||
    checkOneMissing(string2, string1) ||
    checkDiff(string1, string2)
  );
}

console.log(oneAway('pale', 'ple')); //true
console.log(oneAway('pales', 'pale')); //true
console.log(oneAway('pale', 'bale')); //true
console.log(oneAway('pale', 'bake')); //false
