/**intersection( array, array, ... )

Arguments
array (Array): The arrays to query.

Description
Creates an array of unique values present in all provided arrays using strict equality for comparisons
Example

intersection([1, 2, 3], [5, 2, 1, 4], [2, 1]);
// → [1, 2]

intersection([2, 3, 4], [5, 2]);
// → [2]
*/

var arrayfun = require('../arrayfun');

describe("arrayfun", function() {
//Must have a function named intersection()
  it("Must have a function named intersection()", function(){
    expect(arrayfun.intersection).toBeDefined();
  });

  //The first() function must retreive the common number in the arrays within in the (array)
  it("must return the element that is present in all of the arrays of the (array)", function(){
    var array = ( [1, 2, 3], [5, 2, 1, 4], [2, 1] );
    var test_array = arrayfun.intersection( array );
    expect( test_array ).toBe( [1, 2] );
    var arrayB = ( [2, 3, 4], [5, 2] );
    var test_array2 = arrayfun.intersection( arrayB );
    expect( test_array2 ).toBe( [2] );
  });
});