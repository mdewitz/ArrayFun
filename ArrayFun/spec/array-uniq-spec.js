/**
uniq( array, array, ... )

Arguments
array (Array): The arrays to query.

Description
Creates a duplicate-value-free version of an array using strict equality for comparisons.
Example

uniq([1, 2, 1, 3, 1]);
// → [1, 2, 3]

uniq([1, 1, 2, 2, 3]);
// → [1, 2, 3]
*/
// var arrayfun = require('../arrayfun');

// describe("arrayfun", function() {
// //Must have a function named uniq()
//   it("Must have a function named uniq()", function(){
//     expect(arrayfun.uniq).toBeDefined();
//   });

//   //The uniq() function must create a duplicate-value-free version of the (array)
//   it("uniq() function must return the dublicate free elements of the (array)", function(){
//     var test_array = [1, 2, 1, 3, 1];
//     var test_array1 = arrayfun.uniq( test_array );
//     expect( test_array1 ).toBe( [1, 2, 3] );
//   });
// });
