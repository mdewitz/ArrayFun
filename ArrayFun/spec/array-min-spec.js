/**
min( array )

Arguments
array (Array): The array to query.

Description
Retrieves the minimum value of a collection. If the collection is empty or falsey Infinity is returned. 
Example

min([4, 2, 8, 6]);
// → returns 2
*/
var arrayfun = require('../arrayfun');

describe("arrayfun", function() {
//Must have a function named min()
  it("Must have a function named min()", function(){
    expect(arrayfun.min).toBeDefined();
  });

  //The first() function must retreive the largest value in the (array)
  it("min() function must return the smallest element/argument of the (array)", function(){
    var array = [4, 2, 8, 6];
    var test_array1 = arrayfun.min( array );
    expect( test_array1 ).toBe( 2 );
  });
});
