// /**
// difference( array, array, ... )

// Arguments:
// array (Array): The arrays to query.

// Description
// Creates an array excluding all values of the provided arrays using strict equality for comparisons
// Example

// difference([1, 2, 3, 4, 5], [5, 2, 10]);
// // → [1, 3, 4]
// */
// var arrayfun = require('../arrayfun');

// describe("arrayfun", function() {
// //Must have a function named difference()
//   it("Must have a function named difference()", function(){
//     expect(arrayfun.difference).toBeDefined();
//   });

//   //The first() function must retreive the unique numbers in the arrays within in the (array)
//   it("difference() function must return the element that is not duplicated in all of the arrays of the (array)", function(){
//     var array = ([1, 2, 3, 4, 5], [5, 2, 10]);
//     var test_array1 = arrayfun.difference( array );
//     expect( test_array1 ).toBe( [1, 3, 4, 10]);
//   });
// });
