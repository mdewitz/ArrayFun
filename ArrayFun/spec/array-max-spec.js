/** 
max( array )

Arguments
array (Array): The array to query.

Description
Retrieves the maximum value of a collection. If the collection is empty or falsey -Infinity is returned.
Example

max([4, 2, 8, 6]);
// → returns 8
*/

var arrayfun = require('../arrayfun');

describe("arrayfun", function() {
//Must have a function named max()
  it("Must have a function named max()", function(){
    expect(arrayfun.max).toBeDefined();
  });

  //The max() function must retreive the largest value in the (array)
  it("must return the largest element/argument of the (array)", function(){
    var array = [4, 2, 8, 6];
    var test_array1 = arrayfun.max( array );
    expect( test_array1 ).toBe( 8 );
  });
});
