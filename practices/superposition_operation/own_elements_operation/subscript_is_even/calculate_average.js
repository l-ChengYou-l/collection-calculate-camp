'use strict';
var calculate_average = function(collection){
  var num = 0;
  var count = 0;
  for(var i=0;i< collection.length;i++){
    if((i+1)%2 ===0){
      num += collection[i];
      count++;
    }
  }
  return num/count;


};
module.exports = calculate_average;
