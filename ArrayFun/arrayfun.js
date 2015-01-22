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

  intersection : function ( array ) {   
    var object={};
    var arr=[];

    for(var i = 0; i < arguments.length; i++){    
      for(var j = 0; j < arguments[i].length; j++) {
      object[arguments[i][j]] = object[arguments[i][j]] || 0;
      object[arguments[i][j]]+=1;
      }    
      for(var property in object){
      if(object[property]===arguments.length)
          arr.push(Number(property));
      }
    }
  },

  difference : function ( array ) {   
    var objects={};
    var arrD=[];

    for(var k = 0; k < arguments.length; k++){
      for(var l=0; l < arguments[k].length; l++) {
      objects[arguments[k][l]]=objects[arguments[k][l]]+1;
      }
    }
    
    for(var property in objects){
        if(objects[property] < 2)
          arrD.push(Number(property));
    }
    return arrD;
  },

  uniq : function (){
    var objects={};
    var arrD=[];

    for(var k = 0; k < arguments.length; k++){
      for(var l=0; l < arguments[k].length; l++) {
      objects[arguments[k][l]]=objects[arguments[k][l]]+1;
      }
    }
    
    for(var property in objects){
        if(objects[property] < 2)
          arrD.push(Number(property));
    }
    return arrD;
  },

};

