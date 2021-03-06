 module.exports = {
  first : function( array, n ) {
    //var result = null;
    //set default in the beginning
    if ( n > 0 ) {
      return array[0];
    }else {
      return 'undefined';
    }
  },

  max : function( array ) {
    return  Math.max.apply( null, array );
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
  },
  
  min : function( array ) {
    return  Math.min.apply( null, array );
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
  },

  intersection : function(array) {   
    var object={};
    var arr=[];

    for(var i=0; i<arguments.length; i++){    
      for(var j=0; j<arguments[i].length; j++) {
    
      object[arguments[i][j]]=object[arguments[i][j]]||0;
      object[arguments[i][j]]+=1;
      }
    }
    
    for(var property in object){
     if (object[property]==arguments.length)arr.push(Number(property));

    }
      return arr;
  },

  difference : function(n1,n2) {
    var object={};
    var arr=[];
    
    for(var i=0; i<arguments.length; i++){    
      for(var j=0; j<arguments[i].length; j++) {

      object[arguments[i][j]]=object[arguments[i][j]]||0;
      // console.log(object[arguments[i][j]]);
      object[arguments[i][j]]+=1;
      }
    }
    for(var property in object){
     if (object[property]===1)arr.push(Number(property));
    }
      return arr;
  },

  uniq : function (array) {
    var arr = [];
    for(var i = 0; i < arguments[0].length; i++) {
      if(arr.indexOf(arguments[0][i])===-1) {
        arr.push(arguments[0][i]);
      }
    } 
    return arr; 
  },
  // Source: http://stackoverflow.com/questions/1988349/array-push-if-does-not-exist
  
  contains : function (array, n) {
    for(var i = 0; i < array.length; i++) {
      // console.log(array.length);
      if(array[i] === n) {
        return true;
      }else {
        return false;
      }
    } 
  },
};

// for(var i = 0; i < array.length; i++) {
//       // console.log(array.length);
//       if(array.indexOf(n) > -1) {
//         return true;
//       }else {
//         return false;