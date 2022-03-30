//ANOTHER COMMON AND USEFUL WAY OF MANIPULATING OBJECTS IN JAVASCRIPT IS UPDATING EXISTING PROPERTIES ON AN OBJECT.
//THIS FILE WILL SHOW YOU HOW TO UPDATE EXISTING PROPERTIES ON AN OBJECT. KEEP IN MIND THAT UPDATING PROPERTIES
//ON AN OBJECT IS DESTRUCTIVE! MEANING THAT IT ALTERS THE ACTUAL OBJECT.

//LET'S USE THIS OBJECT CALLED "city" IN THIS TUTORIAL:
const city = {
  name: "New York City",
  state: "NY",
  population: 8_000_000, //the underscores are just a way to make large numbers more readable. they're acting as commas.
  sizeInSqMiles: 302,
};

console.log("before updating ->", city);

//1️⃣ I WANT TO UPDATE THE "population" KEY TO BE MORE EXACT. 8 MILLION IS ACTUALLY TOO LOW.
//LET'S SEE HOW TO UPDATE THAT KEY TO BE MORE ACCURATE:
city.population = 8_419_000; //<- cool! 😎

console.log("after updating the 'population' key ->", city);

//PAUSE HERE AND RUN THIS FILE USING THE COMMAND "node src/1-updating-existing-properties.js"
//TAKE A LOOK AT THE TWO console.logs ON LINE 13 AND LINE 19.
//NOTICE THAT WHEN THE "city" OBJECT IS LOGGED ON LINE 19, ITS "population" KEY HAS BEEN UPDATED!

//2️⃣ LET'S MAKE THE "size" KEY MORE ACCURATE TOO. NYC IS ACTUALLY A LITTLE BIGGER THAN 302 SQUARE MILES.

city.sizeInSqMiles = 302.6;

//TRY COMMENTING IN LINE 31 TO console.log THE "city" OBJECT AGAIN AFTER THIS SECOND UPDATE.
//THEN RUN THIS FILE AGAIN AND SEE THE UPDATED "size" PROPERTY ON THE "city" OBJECT.
// console.log("after updating 'size' key ->", city); //👀

//3️⃣ I WANT TO UPDATE ONE MORE PROPERTY ON THIS OBJECT CALLED "city".
//THIS TIME I WANT TO UPDATE THE KEY AND VALUE BASED ON VARIABLES.
//TO DO THAT, I NEED TO USE ⭐️BRACKET NOTATION⭐️. LET'S SEE HOW:
let keyToUpdate = "state";
let updatedValue = "New York";

city[keyToUpdate] = updatedValue; //<- not too hard! Just use brackets instead of dot notation to access a key using a variable!

//TRY COMMENTING IN LINE 43 TO console.log THE "city" OBJECT AGAIN AFTER THIS LAST UPDATE.
//THEN RUN THIS FILE AGAIN AND SEE THE UPDATED "state" KEY ON THE "city" OBJECT.
// console.log("after updating 'state' key ->", city); //👀

//🌇 NOW IT'S YOUR TURN TO PRACTICE UPDATING EXISTING PROPERTIES ON AN OBJECT.
//COMPLETE THE THREE PRACTICE PROBLEMS BELOW...
//NOTE THAT YOU WILL HAVE TO ADD IN THE PARAMETER(S) YOURSELF

/**
 *
 *
 *
 * * updateVisitedProperty()
 *
 * * write a function that takes in an object and updates its key called "visited" to be true.
 * * return the modified object.
 *
 * @param {object} - An object.
 * @returns {object} The modified object.
 *
 * EXAMPLE:
 * updateVisitedProperty({name: "Dallas", visited: false})
 * > {
 *   name: "Dallas",
 *   visited: true
 *   }
 *
 * EXAMPLE:
 * let capital = {
 *   name: "Manila",
 *   visited: false
 *   };
 * updateVisitedProperty(capital)
 * > {
 *   name: "Manila",
 *   visited: true
 *   }
 *
 */
function updateVisitedProperty() {}

/**
 *
 *
 *
 * * updateInputtedProperty()
 *
 * * write a function that takes in an object and updates a given key/value pair based on the arguments
 * * passed to it, then returns the modified object.
 *
 * @param {object} - An object.
 * @param {string or number} - The key to be updated.
 * @param {any data type} - The corresponding new value to be set.
 * @returns {object} The modified object.
 *
 * EXAMPLE:
 * updateInputtedProperty({name: "Portland", state: "Oregon"}, "state", "Maine")
 * > {
 *   name: "Portland",
 *   state: "Maine"
 *   }
 *
 * EXAMPLE:
 * let sinCity = {
 *   name: "Vegas",
 *   state: "Nevada"
 *   };
 * updateInputtedProperty(sinCity, "name", "Las Vegas")
 * > {
 *   name: "Las Vegas",
 *   state: "Nevada"
 *   }
 *
 */
function updateInputtedProperty() {}

/**
 *
 *
 *
 * * updateAnyProperty()
 *
 * * write a function that takes in an object and updates any existing key to a static value
 * * of your choosing, then returns the modified object.
 * * All objects passed to this function will have the following keys: "name", "state", "population", "sizeInSqMiles"
 * * Pick one of those four keys to modify, and set it to any static value you want.
 * *(for example, set the "name" to be "corndog". see examples below.)
 *
 * @param {object} - An object.
 * @returns {object} The modified object.
 *
 * EXAMPLE:
 * updateAnyProperty({name: "Los Angeles", state: "California", population: 3_967_000, sizeInSqMiles: 503})
 * > {
 *   name: "corndog",
 *   state: "California",
 *   population: 3_967_000,
 *   sizeInSqMiles: 503
 *   }
 *
 * EXAMPLE:
 * let magicCity = {
 *   name: "Miami",
 *   state: "Florida",
 *   population: 454_279,
 *   sizeInSqMiles: 55.25
 *   };
 * updateAnyProperty(magicCity)
 * > {
 *   name: "corndog",
 *   state: "Florida",
 *   population: 454_279,
 *   sizeInSqMiles: 55.25
 *   }
 *
 */
function updateAnyProperty() {}

module.exports = {
  updateVisitedProperty,
  updateInputtedProperty,
  updateAnyProperty,
};
