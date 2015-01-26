/** README
first(array, [n])

Arguments
array (Array): The array to query.
[n] (Number): 

Description
Gets the first element or first n elements of an array. 
Example

var test_array = ['a','b','c'];

first( test_array ); // → returns 'a'
first( test_array, 2 ); // → returns ['a','b']
*/

var arrayfun = require('../arrayfun');

describe("arrayfun", function() {

//Must have a function named first()
    it("Must have a function named first()", function(){
    expect(arrayfun.first).toBeDefined();
  });

  //The first() function must return the first element of the (array)
  it("must return the first element of the first argument (array)", function(){
    var array = ['a','b','c'];
    var array1 = arrayfun.first( array, 1 );
    expect( array1 ).toBe( 'a' );
    var array2 = arrayfun.first( array, 2 );
    expect( array2 ).toBe( 'a', 'b' );
  });
});