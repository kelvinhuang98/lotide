# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @kelvinhuang98/lotide`

**Require it:**

`const _ = require('@kelvinhuang98/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `countLetters(string)`: returns an object with keys indicating each letter in the string, and values indicating the number of times the key occurred in thee string
- `countOnly(allItems, itemsToCount)`: accepts an array of data and an object containing keys of items and values as booleans
- `eqArrays(arrayOne, arrayTwo)`: compares two arrays and returns true or false depending on if they are equal
- `eqObjects(objectOne, objectTwo)`: compares two objects and returns true or false depending on if they are equal
- `findKey(object, callback)`: returns an object's key based on the condition as specified by the callback function
- `findKeyByValue(object, value)`: returns an object's key based on the inputted value
- `flatten(array)`: returns an array without any nested arrays
- `head(array)`: returns the first element of the array
- `letterPositions(string)`: returns an object with the index positions where each letter of the string is found
- `map(array, callback)`: returns a new array with modified values of the original array depending on the callback function
- `middle(array)`: returns the middle-most element(s) of the given array.
- `tail(array)`: returns the array with the first element removed
- `takeUntil(array, callback)`: returns a new array with all the items in the original array up until a condition as specified by the callback function
- `without(array, itemsToRemove`): removes an item from an array and returns a modified array without the item
