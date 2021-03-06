var checkPermute = function(stringOne, stringTwo) {
  // if different lengths, return false
  if (stringOne.length !== stringTwo.length) {
    return false;
    // else sort and compare
    // (doesnt matter how it's sorted, as long as it's sorted the same way)
  } else {
    var sortedStringOne = stringOne
      .split('')
      .sort()
      .join('');
    //console.log(sortedStringOne);
    var sortedStringTwo = stringTwo
      .split('')
      .sort()
      .join('');
    //console.log(sortedStringTwo);
    return sortedStringOne === sortedStringTwo;
  }
};

// Tests
console.log(checkPermute('aba', 'aab'), true);

console.log(checkPermute('aba', 'aaba'), false);

console.log(checkPermute('aba', 'aaa'), false);
