//WELCOME TO JAVASCRIPT OBJECT FUNDAMENTALS PRACTICE!
//IN THIS REPO, YOU'LL FIND SHORT TUTORIALS AND PRACTICE PROBLEMS ON HOW TO MANIPULATE OBJECTS.

//ONE OF THE MOST COMMON AND USEFUL WAYS OF MANIPULATING OBJECTS IN JAVASCRIPT IS ADDING NEW PROPERTIES TO AN OBJECT.
//THIS FILE WILL SHOW YOU HOW TO ADD NEW PROPERTIES TO AN OBJECT. KEEP IN MIND THAT ADDING NEW PROPERTIES
//TO AN OBJECT IS DESTRUCTIVE! MEANING THAT IT ALTERS THE ACTUAL OBJECT.

//LET'S USE THIS OBJECT CALLED "dog" IN THIS TUTORIAL:
const dog = {
  type: "Maltese/Chihuahua",
  name: "Deloba",
  caretaker: "Sam",
  favoriteFood: "whatever Sam is eating",
  favoriteToy: "Lambchop",
};

console.log("before adding new key ->", dog);

//1️⃣ I WANT TO ADD SOME NEW PROPERTIES TO THIS OBJECT CALLED "dog".
//I WANT TO ADD A KEY OF "cute" AND SET IT TO "true". LET'S SEE HOW TO DO THAT:
dog.cute = true; //<--wow! easy! 😎

console.log("after adding new key ->", dog);

//PAUSE HERE AND RUN THIS FILE USING THE COMMAND "node src/0-adding-new-properties.js"
//TAKE A LOOK AT THE TWO console.logs ON LINE 15 AND LINE 21.
//NOTICE THAT WHEN THE "dog" OBJECT IS LOGGED ON LINE 21, IT HAS A NEW KEY THAT IT DIDN'T HAVE IN THE FIRST LOG FROM LINE 15!

//2️⃣ LET'S ADD ANOTHER KEY.

dog.friends = ["Monkey", "Gumby", "Scout"];

//TRY COMMENTING IN LINE 33 TO console.log THE "dog" OBJECT AGAIN AFTER THIS SECOND ADDITION.
//THEN RUN THIS FILE AGAIN AND SEE THE NEW "friends" KEY ON THE "dog" OBJECT.
// console.log("after adding 'friends' key ->", dog); //👀

//3️⃣ I WANT TO ADD ONE MORE KEY TO THIS OBJECT CALLED "dog".
//THIS TIME I WANT TO ADD THE KEY AND VALUE BASED ON VARIABLES.
//TO DO THAT, I NEED TO USE ⭐️BRACKET NOTATION⭐️. LET'S SEE HOW:
let newKey = "age";
let newValue = 9;

dog[newKey] = newValue; //<- not too hard! Just use brackets instead of dot notation to add your new key using a variable!

//TRY COMMENTING IN LINE 45 TO console.log THE "dog" OBJECT AGAIN AFTER THIS LAST ADDITION.
//THEN RUN THIS FILE AGAIN AND SEE THE NEW "age" KEY ON THE "dog" OBJECT.
// console.log("after adding 'age' key ->", dog); //👀

//🐶 NOW IT'S YOUR TURN TO PRACTICE ADDING NEW KEY/VALUE PAIRS TO AN EXISTING OBJECT.
//COMPLETE THE THREE PRACTICE PROBLEMS BELOW...
//NOTE THAT YOU WILL HAVE TO ADD IN THE PARAMETER(S) YOURSELF

/**
 *
 *
 *
 * * addCuteProperty()
 *
 * * write a function that takes in an object and adds a new key/value pair of "cute: true"
 * * to it, then returns the modified object.
 *
 * @param {object} - An object.
 * @returns {object} The modified object.
 *
 * EXAMPLE:
 * addCuteProperty({name: "Bunny"})
 * > {
 *   name: "Bunny",
 *   cute: true
 *   }
 *
 * EXAMPLE:
 * let pet = {
 *   name: "Snoopy",
 *   species: "Dog"
 *   };
 * addCuteProperty(pet)
 * > {
 *   name: "Snoopy",
 *   species: "Dog"
 *   cute: true
 *   }
 *
 */
function addCuteProperty() {}

/**
 *
 *
 *
 * * addInputtedProperty()
 *
 * * write a function that takes in an object and adds a new key/value pair based on the arguments
 * * passed to it, then returns the modified object.
 *
 * @param {object} - An object.
 * @param {string or number} - The new key to be added.
 * @param {any data type} - The corresponding value to be added.
 * @returns {object} The modified object.
 *
 * EXAMPLE:
 * addInputtedProperty({name: "Bunny"}, "species", "rabbit")
 * > {
 *   name: "Bunny",
 *   species: "rabbit"
 *   }
 *
 * EXAMPLE:
 * let pet = {
 *   name: "Snoopy",
 *   species: "Dog"
 *   };
 * addInputtedProperty(pet, "age", 47)
 * > {
 *   name: "Snoopy",
 *   species: "Dog"
 *   age: 47
 *   }
 *
 */
function addInputtedProperty() {}

/**
 *
 *
 *
 * * addAnyProperty()
 *
 * * write a function that takes in an object and adds a new key/value pair of your choosing
 * * to it, then returns the modified object.
 *
 * @param {object} - An object.
 * @returns {object} The modified object.
 *
 * EXAMPLE:
 * addAnyProperty({name: "Bunny"})
 * > {
 *   name: "Bunny",
 *   anyKey: "anyValue"
 *   }
 *
 * EXAMPLE:
 * let pet = {
 *   name: "Snoopy",
 *   species: "Dog"
 *   };
 * addAnyProperty(pet)
 * > {
 *   name: "Snoopy",
 *   species: "Dog"
 *   anyKey: "anyValue"
 *   }
 *
 */
function addAnyProperty() {}

module.exports = {
  addCuteProperty,
  addInputtedProperty,
  addAnyProperty,
};
