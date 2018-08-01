//QUESTION: Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the compressed string is not smaller than the orignal string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a-z).

function strComp(string) {
  var letters = {};
  var stringSplit = string.split('');
  console.log(stringSplit);
  stringSplit.forEach(char => {
    if (letters[char] === undefined) {
      letters[char] = 0;
    }
    letters[char]++;
  });
  console.log(letters);
}

strComp('aabcccccaaa');
