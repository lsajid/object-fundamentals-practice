# Object Fundamentals Practice

This repo contains some practice problems to improve your confidence level when it comes to working with objects in JavaScript.

## Getting started

1. Fork and clone this repository.

1. Navigate to the cloned repository's directory on your command line. Then, run the following command:

   ```
   npm install
   ```

   This will install the libraries needed to run the tests.

1. Open up the repository in VSCode. Follow the instructions below.

## Instructions

Complete each function inside of the `src/` folder. The comments and tests will help you determine what each function requires.

### Tests

To run the tests, you can run the following command from the command line. You will need to be in the root directory of your repository.

```
npm test
```

This will run the test output once.

### Run one file at a time

Since there are several files in this repo, it's recommended that you run _one file at a time_ as you work through them. Like so:

```
npm test 0-adding-new-properties
```

```
npm test 1-updating-existing-properties
```

```
npm test 2-deleting-properties
```

```
npm test 3-nested-objects-practice
```

```
npm test 4-merge-objects
```

### Run tests individually

_After choosing a specific file to run,_ you can also specify which test you want to run. Add `.only` after either `test` or `describe` for the specific test you'd like to run.

```js
test.only("should return an object with a new key and value that match the inputted arguments.", () => {
```

This will either run the specific `test` or, in the case of adding `.only` to a `describe`, all of the tests for a specific function.

### Run file

If you want to manually test out your file, you can do so by running the following command.

```
node src/0-adding-new-properties.js
```

```
node src/1-updating-existing-properties.js
```

```
node src/2-deleting-properties.js
```

etc.
The output will be printed to your terminal.
