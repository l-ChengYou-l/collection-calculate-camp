'use strict';
var calculate_median = function(collection){
  var result = []
  var median
  for(var i=0;i< collection.length;i++){
    if((i+1)%2 ===0){
      result.push(collection[i]);
    }else{
      result.push(collection[i])
    }
  }
  if(result.length %2 ==0){
    median = Math.ceil((result[result.length/2-1]+result[result.length/2])/2)
  }else{
    median = result[Math.floor(result.length/2)]
  }
  return median;
};
module.exports = calculate_median;
