// /**
// contains( array, target )

// Arguments:
// array (Array): The array to query.
// target (*): The value to check for.

// Description
// Checks if a given value is present in a collection using strict equality for comparisons
// Example

// contains([1, 2, 3], 1);
// // → true

// contains([1, 2, 3], 1, 2);
// // → false
// */
var arrayfun = require('../arrayfun');
//describe("Must have a function named first()", function() 

describe("arrayfun", function() {
//Must have a function named contains()
  it("Must have a function named contains()", function(){
    expect(arrayfun.contains).toBeDefined();
  });

  //The contains() function must create a duplicate-value-free version of the (array)
  it("contains() function must return true if there are no duplicative elements in the array and false if there are", function(){
    var testA = ([1, 2, 3, 1]);
    var n = 1;
    var test1 = arrayfun.contains( testA, n );
    expect( test1 ).toBe( true );
  //   var testB = ([1, 2, 3,], 1,2);
  //   var n2= 1;
  //   var n3 = 2;
  //   var test2 = arrayfun.contains( testB, n2, n3 );
  //   expect( test2 ).toBe( false );
  });
});
