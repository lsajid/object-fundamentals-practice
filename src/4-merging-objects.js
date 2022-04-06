//ANOTHER COMMON AND USEFUL WAY OF MANIPULATING OBJECTS IN JAVASCRIPT IS MERGING OBJECTS TOGETHER.
//THIS FILE WILL SHOW YOU HOW TO MERGE TWO OR MORE OBJECTS INTO A NEW, SINGLE OBJECT.

//LET'S MERGE THESE TWO OBJECTS CALLED "person" AND "job" TOGETHER:
const person = {
  firstName: "Imelda",
  lastName: "Flores",
  age: 32,
  ssn: "123-45-6789",
};

const job = {
  location: "USA",
  description: "Software Engineer",
  salary: 100_000,
};

//<-----------------------------------Spread Operator--------------------------------------------------->

//1️⃣ ONE WAY WE CAN MERGE THESE OBJECTS TOGETHER IS USING THE spread operator.
//LET'S SEE HOW TO USE THE spread operator TO MERGE THE "person" AND "job" OBJECTS INTO A SINGLE OBJECT CALLED "employee".
const employee = { ...person, ...job };

// console.log("newly merged 'employee' object ->", employee);

//PAUSE HERE AND RUN THIS FILE USING THE COMMAND "node src/4-merge-objects.js"
//TAKE A LOOK AT THE console.log ON LINE 24
//NOTICE THAT THIS NEW "employee" OBJECT HAS ALL OF THE PROPERTIES FROM BOTH "person" AND "job".

//<-----------------------------------Overriding Keys--------------------------------------------------->

//2️⃣ WHAT IF YOU WANTED TO MERGE TWO OBJECTS THAT SHARED ONE OR MORE KEY NAMES?
//FOR EXAMPLE, CONSIDER THESE TWO OBJECTS CALLED "fruit" AND "vegetable":

const fruit = {
  color: "red",
  shape: "round",
  healthy: true,
  classification: "fruit",
};

const vegetable = {
  gramsFiber: 1.2,
  weightOz: 5,
  gramsSugar: 2.5,
  classification: "vegetable",
};

//THESE TWO OBJECTS BOTH HAVE A KEY CALLED "classification". WHAT WILL HAPPEN TO THAT KEY WHEN
//WE MERGE "fruit" AND "vegetable" into a single object called "tomato"? LET'S FIND OUT:

const tomato = { ...fruit, ...vegetable };
// console.log("...fruit, ...vegetable ->", tomato); //👀

//COMMENT IN LINE 53. RUN THIS FILE AGAIN TO SEE WHAT OUR NEW "tomato" OBJECT LOOKS LIKE.
//WHAT HAPPENED TO THE KEY CALLED "classification"?
//WHAT IF WE WERE TO SWITCH THE ORDER THAT "fruit" AND "vegetable" GET SPREAD INTO THE "tomato" OBJECT?

const tomato2 = { ...vegetable, ...fruit };
// console.log("tomato twoo", "...vegetable, ...fruit ->", tomato2); //👀

//COMMENT IN LINE 60. RUN THE FILE AGAIN AND NOTICE WHAT THE "classification" KEY ENDS UP BEING SET TO.
//💡 ORDER MATTERS IN THIS CASE. WHEN OBJECTS GETTING MERGED SHARE A KEY NAME, THE ONE THAT GETS ADDED
//LAST WILL OVERRIDE THE OTHERS.

//<-----------------------------------Object.assign()--------------------------------------------------->

//3️⃣ ANOTHER WAY OF MERGING OBJECTS IS USING THE Object.assign() METHOD:
const tomato3 = Object.assign(fruit, vegetable);
console.log("make tomato using Object.assign() ->", tomato3); //👀

//COMMENT IN LINE 70, THEN RUN THE FILE TO SEE THE RESULT OF USING Object.assign()
//ORDER MATTERS WHEN USING Object.assign() TOO.

//<--------------------------------------Your Turn------------------------------------------------------>

// 🍅 NOW IT'S YOUR TURN TO PRACTICE MERGING OBJECTS TOGETHER. COMPLETE THE TWO FUNCTIONS BELOW.
//❗️NOTE THAT YOU WILL HAVE TO ADD IN THE PARAMETER(S) FOR EACH FUNCTION YOURSELF.

/**
 *
 *
 *
 * * combineUsingSpread()
 *
 * * write a function that takes in two objects and uses the spread operator to
 * * merge them into a new object. return the new object.
 *
 * @param {object} - An object.
 * @param {object} - Another object.
 * @returns {object} The new object.
 *
 * EXAMPLE:
 * combineUsingSpread({name: "Sam"}, {favoriteFruit: "watermelon"})
 * > {
 *   name: "Sam"
 *   favoriteFruit: "watermelon"
 *   }
 *
 * EXAMPLE:
 * let person = {
 *   name: "Deloba",
 *   ssn: "123-45-6789"
 *   };
 * let job = {
 *   location: USA,
 *   title: "Software Engineer"
 * }
 * combineUsingSpread(person, job)
 * > {
 *   name: "Deloba",
 *   ssn: "123-45-6789"
 *   location: USA,
 *   title: "Software Engineer"
 *   }
 *
 */
function combineUsingSpread(object1, object2) {
  return {...object1, ...object2};
}

/**
 *
 *
 *
 * * combineUsingAssign()
 *
 * * write a function that takes in two objects and uses Object.assign() to
 * * merge them into a new object. return the new object.
 *
 * @param {object} - An object.
 * @param {object} - Another object.
 * @returns {object} The new object.
 *
 * EXAMPLE:
 * combineUsingAssign({name: "Sam"}, {favoriteFruit: "watermelon"})
 * > {
 *   name: "Sam"
 *   favoriteFruit: "watermelon"
 *   }
 *
 * EXAMPLE:
 * let person = {
 *   name: "Deloba",
 *   ssn: "123-45-6789"
 *   };
 * let job = {
 *   location: USA,
 *   title: "Software Engineer"
 * }
 * combineUsingAssign(person, job)
 * > {
 *   name: "Deloba",
 *   ssn: "123-45-6789"
 *   location: USA,
 *   title: "Software Engineer"
 *   }
 *
 */
function combineUsingAssign(object1, object2) {
  let mergedObject = Object.assign(object1, object2);
  return mergedObject;
}

module.exports = {
  combineUsingSpread,
  combineUsingAssign,
};
