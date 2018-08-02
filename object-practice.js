//QUESTION 1: Write a JavaScript program to list the properties of a JavaScript object.
//Sample object:
//var student = {
//name : "David Rayy",
//sclass : "VI",
//rollno : 12 };
//Sample Output: name,sclass,rollno

var cat = {
  color: "french bulldog",
  name: "Moo-Moo",
  favoriteToy: "ball"
};

var dog = {
  color: "french bulldog",
  name: "Moo-Moo",
  age: 3
};

function listProperties(object) {
  var results = Object.keys(object);
  return results.join(", ");
}

//console.log(listProperties(cat));
//console.log(listProperties(dog));

//QUESTION 2: Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};

function deleteKey(object, keyName) {
  console.log(object);
  delete object[keyName]; //this has to be square brackets bc we do not know what the name of the key is going to be until function is called
  console.log(object);
}

//deleteKey(student, "rollno");

// QUESTION 3: Write a JavaScript program to get the length of an JavaScript object.
// Sample object :
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};

function objectLength(object) {
  var length = 0;
  Object.keys(object).forEach(key => {
    if (key !== "") {
      length++;
    }
  });
  return length;
}

//console.log(objectLength(student));

//QUESTION 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. Go to the editor

var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false
  }
];

function displayBook(array) {
  array.forEach(book => {
    if (book.readingStatus === true) {
      console.log("You have already read " + book.title + " by " + book.author);
    } else {
      console.log("You have NOT read " + book.title + " by " + book.author);
    }
  });
}

displayBook(library);
