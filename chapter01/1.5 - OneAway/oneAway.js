var oneAway = function(string1, string2) {
  // insert a char for str1 -> remove a char for str2
  var checkOneMissing = function(first, second) {
    if (first.length !== second.length - 1) {
      //if the length of first DOES NOT equal the length -1 of second
      return false;
      //then exit function and return false. this function has to have only one character different so one must be ONE longer
    } else {
      //otherwise
      var mulligan = false;
      //set variable to false
      var fP = 0; // first Pointer
      //set first counter to 0
      var sP = 0; // second Pointer
      //set second counter to 0
      while (fP < first.length) {
        //while first counter is smaller than the length of first string
        if (first[fP] !== second[sP]) {
          //AND if first[i] (based on the counter) does not equal second[i] (based on the counter)
          if (mulligan) {
            //AND if variable mulligan is true
            return false;
            //then return false
          } else {
            //otherwise set variable to equal true
            mulligan = true;
            sP++; // second length is longer
            //and only increase the longer string's
          }
        } else {
          fP++;
          sP++;
        }
      }
      return true;
    }
  };

  var checkOneDiff = function(first, second) {
    if (first.length !== second.length) {
      return false;
    } else {
      var mulligan = false;
      var fP = 0; // first Pointer
      var sP = 0; // second Pointer
      while (fP < first.length) {
        if (first[fP] !== second[sP]) {
          if (mulligan) {
            return false; // more than one mismatch
          } else {
            mulligan = true; // use up mulligan
          }
        }
        fP++;
        sP++;
      }
      return true;
    }
  };
  // insert a char for str1 -> remove a char for str2
  // check one diff

  // console log checks
  // console.log(string1, string2, 'checkMiss', checkOneMissing(string1, string2));
  // console.log(string2, string1, 'checkMiss', checkOneMissing(string2, string1));
  // console.log(string1, string2, 'checkDiff', checkOneDiff(string1, string2));

  return (
    checkOneMissing(string1, string2) ||
    checkOneMissing(string2, string1) ||
    checkOneDiff(string1, string2)
  );
};

// Test
console.log(oneAway('pale', 'ple'), true);
console.log(oneAway('pales', 'pale'), true);
console.log(oneAway('pale', 'bale'), true);
console.log(oneAway('pale', 'bake'), false);
