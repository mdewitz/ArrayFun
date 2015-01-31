/**
difference( array, array, ... )

Arguments:
array (Array): The arrays to query.

Description
Creates an array excluding all values of the provided arrays using strict equality for comparisons
Example

difference([1, 2, 3, 4, 5], [5, 2, 10]);
// → [1, 3, 4]
*/

var arrayfun = require('../arrayfun');

describe("arrayfun", function() {
//Must have a function named difference()
  it("Must have a function named difference()", function(){
    expect(arrayfun.difference).toBeDefined();
  });
  
  //The first() function must retreive the unique numbers in the arrays within in the (array)
  it("must return the element that is not duplicated within the (array)", function(){
  //   var a = [1, 2, 3, 4, 5];
  //   var b= [5, 2, 10];
  //   var test_array1 = arrayfun.difference( a, b );
  //   expect( test_array1 ).toEqual([1, 3, 4, 10]);
  // });
    var array1 = [1, 2, 3, 4, 5];
    var array2 = [5, 2, 10];
    var test_array1 = arrayfun.difference( array1, array2 );
    expect( test_array1 ).toEqual([1, 3, 4, 10]);
  });
});