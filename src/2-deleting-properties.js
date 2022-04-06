//ANOTHER COMMON AND USEFUL WAY OF MANIPULATING OBJECTS IN JAVASCRIPT IS DELETING EXISTING PROPERTIES ON AN OBJECT.
//THIS FILE WILL SHOW YOU HOW TO DELETE EXISTING PROPERTIES ON AN OBJECT. KEEP IN MIND THAT DELETING PROPERTIES
//FROM AN OBJECT IS DESTRUCTIVE! MEANING THAT IT ALTERS THE ACTUAL OBJECT.

//LET'S USE THIS OBJECT CALLED "cake" IN THIS TUTORIAL:
const cake = {
  cakeFlavor: "red velvet",
  frostingFlavor: "cream cheese",
  layers: 3,
  servings: 15,
  costInDollars: 70,
};

// console.log("before deleting the 'servings' property->", cake);

//<-----------------------------------Deleting a Property--------------------------------------------------->

//1️⃣ I WANT TO DELETE THE "servings" PROPERTY.
//LET'S SEE HOW TO DELETE THE "servings" PROPERTY ON THE "cake" OBJECT:
delete cake.servings; //<- that's it! pretty easy! 😎

// console.log("after deleting the 'servings' property ->", cake);

//PAUSE HERE AND RUN THIS FILE USING THE COMMAND "node src/2-deleting-existing-properties.js"
//TAKE A LOOK AT THE TWO console.logs ON LINE 14 AND LINE 20.
//NOTICE THAT WHEN THE "cake" OBJECT IS LOGGED ON LINE 20, IT NO LONGER HAS A "servings" PROPERTY!

//<-----------------------------------Deleting Another Property--------------------------------------------------->

//2️⃣ LET'S DELETE THE "layers" PROPERTY TOO.

delete cake.layers;

//TRY COMMENTING IN LINE 36 TO console.log THE "cake" OBJECT AGAIN AFTER DELETING ANOTHER KEY.
//THEN RUN THIS FILE AGAIN AND SEE THE MODIFIED "cake" OBJECT.
 //console.log("after deleting 'layers' key ->", cake); //👀

//<-----------------------------------Using Bracket Notation--------------------------------------------------->

//3️⃣ I WANT TO DELETE ONE MORE PROPERTY ON THIS OBJECT CALLED "cake".
//THIS TIME I WANT TO DELETE THE PROPERTY BASED ON A VARIABLE.
//TO DO THAT, I NEED TO USE ⭐️BRACKET NOTATION⭐️. LET'S SEE HOW:
let propertyToDelete = "costInDollars";

delete cake[propertyToDelete]; //<- not too hard! Just use brackets instead of dot notation to access a key using a variable!

//TRY COMMENTING IN LINE 49 TO console.log THE "cake" OBJECT AGAIN AFTER DELETING ANOTHER PROPERTY.
//THEN RUN THIS FILE AGAIN AND SEE THE MODIFIED "cake" OBJECT.
 //console.log("after deleting 'costInDollars' key ->", cake); //👀

//<-----------------------------------Your Turn--------------------------------------------------->

//🍰 NOW IT'S YOUR TURN TO PRACTICE DELETING EXISTING PROPERTIES ON AN OBJECT.
//COMPLETE THE THREE PRACTICE PROBLEMS BELOW...
//❗️NOTE THAT YOU WILL HAVE TO ADD IN THE PARAMETER(S) FOR EACH FUNCTION YOURSELF.

/**
 *
 *
 *
 * * deleteSprinklesProperty()
 *
 * * write a function that takes in an object and deletes its key called "sprinkles".
 * * return the modified object.
 *
 * @param {object} - An object.
 * @returns {object} The modified object.
 *
 * EXAMPLE:
 * deleteSprinklesProperty({cakeFlavor: "chocolate", frostingFlavor: "chocolate", sprinkles: false})
 * > {
 *   cakeFlavor: "chocolate",
 *   frostingFlavor: "chocolate"
 *   }
 *
 * EXAMPLE:
 * let birthdayCake = {
 *   cakeFlavor: "vanilla",
 *   frostingFlavor: "strawberry",
 *   sprinkles: true
 *   };
 * deleteSprinklesProperty(birthdayCake)
 * > {
 *   cakeFlavor: "vanilla",
 *   frostingFlavor: "strawberry",
 *   }
 *
 */
function deleteSprinklesProperty(obj) {
  delete obj.sprinkles;
  return obj;
}

/**
 *
 *
 *
 * * deleteInputtedProperty()
 *
 * * write a function that takes in an object and deletes a given property based on the arguments
 * * passed to it, then returns the modified object.
 *
 * @param {object} - An object.
 * @param {string or number} - The key to be deleted.
 * @returns {object} The modified object.
 *
 * EXAMPLE:
 * deleteInputtedProperty({cakeFlavor: "cinnamon", frostingFlavor: "cinnamon", heightInInches: 15}, "heightInInches")
 * > {
 *   cakeFlavor: "cinnamon",
 *   frostingFlavor: "cinnamon"
 *   }
 *
 * EXAMPLE:
 * let cupcake = {
 *   cakeFlavor: "coconut",
 *   frostingFlavor: "lime",
 *   topping: "mango jam"
 *   };
 * deleteInputtedProperty(cupcake, "topping")
 * > {
 *   cakeFlavor: "coconut",
 *   frostingFlavor: "lime",
 *   }
 *
 */
function deleteInputtedProperty(obj, key) {
  delete obj[key];
  return obj;
}

/**
 *
 *
 *
 * * deleteAnyProperty()
 *
 * * write a function that takes in an object and deletes an existing property of your choosing
 * * and returns the modified object.
 * * All objects passed to this function will have the following keys: "cakeFlavor", "frostingFlavor", "topping", "shape"
 * * Pick one of those four keys to delete, then return the modified object.
 *
 * @param {object} - An object.
 * @returns {object} The modified object.
 *
 * EXAMPLE:
 * deleteAnyProperty({cakeFlavor: "ube", frostingFlavor: "leche flan", topping: "macapuno", shape: "round"})
 * > {
 *   cakeFlavor: "ube",
 *   frostingFlavor: "leche flan",
 *   topping: "macapuno",
 *   }
 *
 * EXAMPLE:
 * let greenCake = {
 *   cakeFlavor: "pistachio",
 *   frostingFlavor: "cherry",
 *   topping: "pistachioes",
 *   shape: "heart"
 *   };
 * deleteAnyProperty(greenCake)
 * > {
 *   cakeFlavor: "pistachio",
 *   frostingFlavor: "cherry",
 *   topping: "chopped pistachios",
 *   }
 *
 */
function deleteAnyProperty(obj) {
  delete obj.cakeFlavor;
  return obj;
}

module.exports = {
  deleteSprinklesProperty,
  deleteInputtedProperty,
  deleteAnyProperty,
};
