//WHAT IF YOU HAVE TO ITERATE THROUGH AN OBJECT'S KEYS, VALUES, OR BOTH? YOU CAN DO THAT!
//THIS FILE WILL SHOW YOU HOW TO ACCESS AND LOOP THROUGH AN OBJECT'S KEYS AND VALUES.

//IN THIS TUTORIAL, LET'S SET THE THEME AS "TAKING CARE OF ANIMALS IN A SANCTUARY".
//WE NEED TO KEEP TRACK OF WHICH ANIMALS EAT WHAT. LET'S USE THIS OBJECT CALLED "animalFoods".:
const animalFoods = {
  capybara: "aquatic grass",
  "fruit bat": "mango", //<- note that you CAN have keys that contain spaces, but they need to be wrapped in quotes. Any time you reference a key like this, you MUST use bracket notation: i.e. console.log(animalFoods["fruit bat"]).
  chicken: "vegetables",
  cow: "grass",
  crow: "seeds",
  tortoise: "collard greens",
  "mantis shrimp": "clams",
};

//0️⃣ BEFORE WE BEGIN THE TUTORIAL, I WANT TO TALK ABOUT 🔑Object.keys()🔑, 💎Object.values()💎, and 🔐Object.entries()🔐:
//Object.keys() ACCESSES JUST THE KEYS OF AN OBJECT AND STORES THEM IN AN ARRAY. IT'S THE MOST USEFUL AND COMMONLY USED OF THE THREE, SO WE'LL FOCUS ON THIS ONE IN THE FOLLOWING TUTORIAL.
//Object.values() ACCESSES JUST THE VALUES AND STORES THEM IN AN ARRAY.
//Object.entries() ACCESSES BOTH AND STORES EACH KEY/VALUE PAIR INSIDE OF A SUBARRAY WITHIN A LARGER ARRAY.
//TRY COMMENTING IN LINES 21, 22, AND 23, TO SEE HOW THEY LOOK WHEN USED ON THE "animalFoods" OBJECT.
// console.log("keys: ", Object.keys(animalFoods)); //👀
// console.log("values: ", Object.values(animalFoods)); //👀
// console.log("entries: ", Object.entries(animalFoods)); //👀
// ^ COMMENT THESE BACK OUT WHEN YOU'RE DONE ^

//1️⃣ OKAY, NOW ONTO THE TUTORIAL: I WANT TO MODIFY THE VALUES IN MY "animalFoods" OBJECT WHOSE KEYS MEET A CERTAIN CONDITION.
//TO DO THIS, WE'LL HAVE TO LOOP THROUGH THE KEYS. WE CAN USE A for...of LOOP AND 🔑Object.keys()🔑!
//LET'S SEE HOW TO MARK EACH "animalFoods" VALUE THAT CORRESPONDS TO A KEY BEGINNING WITH THE LETTER "c".
// console.log("before modifying the 'animalFoods' object->", animalFoods); //👀

for (let animalName of Object.keys(animalFoods)) {
  if (animalName[0] === "c") {
    //           ^accessing the first letter of the animalName
    animalFoods[animalName] += " ***"; //<- adding this string onto the existing value
  }
}

// console.log(
//   "after marking every animalFoods value whose key begins with a 'c' ->",
//   animalFoods
// );  //👀

//PAUSE HERE AND RUN THIS FILE USING THE COMMAND "node src/3-looping-through-objects.js"
//COMMENT IN AND TAKE A LOOK AT THE TWO console.logs ON LINE 29 AND LINE 38.
//NOTICE THAT WHEN THE "animalFoods" OBJECT IS LOGGED ON LINE 38, EVERY ANIMAL WHOSE NAME BEGINS WITH A "c" HAS BEEN MODIFIED!

//2️⃣ THERE'S ANOTHER WAY THAT WE CAN LOOP THROUGH AN OBJECT'S KEYS.
//INSTEAD OF USING A for...of LOOP WITH 🔑Object.keys()🔑, WE CAN JUST USE WHAT'S CALLED A for...in LOOP!
//THE for..in LOOP DOES THE EXACT SAME THING. IT LOOPS OVER AN OBJECT'S KEYS.
//LET'S TAKE A LOOK AT A for...in LOOP IN ACTION.

for (let animalName in animalFoods) {
  if (animalName[0] !== "c") {
    animalFoods[animalName] += "!!!"; //<- adding this string onto the existing value
  }
}

//TRY COMMENTING IN LINE 60 TO console.log THE "animalFoods" OBJECT AGAIN AFTER MAKING THIS SECOND CHANGE.
//THEN RUN THIS FILE AGAIN AND SEE THE MODIFIED "animalFoods" OBJECT.
// console.log("after marking non-'c' animals with '!!!' ->", animalFoods); //👀

//3️⃣ I WANT TO MAKE ONE MORE CHANGE TO THIS OBJECT CALLED "animalFoods".
//THIS TIME I WANT TO CHECK THE ~VALUES~ FOR A CERTAIN CONDITION, NOT THE KEYS.

let secretLetter = "o"; //if any animals' foods (so the VALUE, not the KEY) contain this secret letter, we'll mark them by adding an "⚽️" to the end.

for (let animalName in animalFoods) {
  if (animalFoods[animalName].includes(secretLetter)) {
    animalFoods[animalName] += "⚽️";
  }
}

//TRY COMMENTING IN LINE 75 TO console.log THE "animalFoods" OBJECT AGAIN AFTER MAKING THIS MOST RECENT CHANGE.
//THEN RUN THIS FILE AGAIN AND SEE THE MODIFIED "animalFoods" OBJECT.
// console.log("after modifying based on VALUES containing 'o' ->", animalFoods); //👀

//🐮 NOW IT'S YOUR TURN TO PRACTICE LOOPING THROUGH THE KEYS OF AN OBJECT.
//COMPLETE THE THREE PRACTICE PROBLEMS BELOW...
//NOTE THAT YOU WILL HAVE TO ADD IN THE PARAMETER(S) YOURSELF

/**
 *
 *
 ** the purpose of this exercise is to practice modifying object values based on whether or not
 ** their corresponding key meets a certain condition.
 *
 * * doubleBasedOnKey()
 *
 * * write a function that takes in an object and doubles any value that belongs to a key that starts with "c"
 * * return the modified object.
 *
 * @param {object} - An object.
 * @returns {object} The modified object.
 *
 * EXAMPLE:
 * doubleBasedOnKey({dog: "steak", cat: "chicken"})
 * > {
 *   dog: "steak",
 *   cat: "chickenchicken"
 *   }
 *
 * EXAMPLE:
 * let petQuantities = {
 *   fish: 10,
 *   bunny: 2,
 *   capybara: 4
 *   };
 * doubleBasedOnKey(petQuantities)
 * > {
 *   fish: 10,
 *   bunny: 2,
 *   capybara: 8
 *   }
 *
 */
function doubleBasedOnKey() {}

/**
 *
 *
 * * the purpose of this exercise is to practice deleting object properties based on whether or not
 * * their key meets a certain condition.
 *
 * * deleteIfKeyContainsChar()
 *
 * * write a function that takes in an object and deletes properties if their key contains the inputted secret character.
 * * return the modified object.
 *
 * @param {object} - An object.
 * @param {string} - The secret character.
 * @returns {object} The modified object.
 *
 * EXAMPLE:
 * deleteIfKeyContainsChar({aardvark: "termites", donkey: "oat straw", parrot: "fruit"}, "a")
 * > {
 *   donkey: "oat straw"
 *   }
 *
 * EXAMPLE:
 * let petFoods = {
 *   gerbil: "ice cream",
 *   ferret: "raw meat",
 *   cockatiel: "pellets"
 *   };
 * deleteIfKeyContainsChar(petFoods, "r")
 * > {
 *   cockatiel: "pellets"
 *   }
 *
 */
function deleteIfKeyContainsChar() {}

/**
 *
 *
 * * the purpose of this exercise is to practice modifying object values based on whether or not
 * * the value itself meets a certain condition.
 *
 * * markIfValueContainsChar()
 *
 * * write a function that takes in an object and adds "!!!" to the value if it contains the inputted secret character.
 * * return the modified object.
 *
 * @param {object} - An object.
 * @param {string} - The secret character.
 * @returns {object} The modified object.
 *
 * EXAMPLE:
 * markIfValueContainsChar({aardvark: "termites", donkey: "oat straw", parrot: "fruit"}, "a")
 * > {
 *   aardvark: "termites",
 *   donkey: "oat straw!!!"
 *   parrot: "fruit"
 *   }
 *
 * EXAMPLE:
 * let petFoods = {
 *   gerbil: "ice cream",
 *   ferret: "raw meat",
 *   cockatiel: "pellets"
 *   };
 * markIfValueContainsChar(petFoods, "t")
 * > {
 *   gerbil: "ice cream",
 *   ferret: "raw meat!!!",
 *   cockatiel: "pellets!!!"
 *   }
 *
 */
function markIfValueContainsChar() {}

module.exports = {
  doubleBasedOnKey,
  deleteIfKeyContainsChar,
  markIfValueContainsChar,
};
