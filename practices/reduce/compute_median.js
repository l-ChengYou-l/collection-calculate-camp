'use strict';

function compute_median(collection) {
  //在这里写入代码
  let median = 0
  let new_collection = collection.sort((a,b) => a-b)
  if(new_collection.length%2===0){
    median = (new_collection[new_collection.length/2-1]+new_collection[new_collection.length/2])/2
  }else{
    median = new_collection[Math.floor(new_collection.length/2)]
  }
  return median
}

module.exports = compute_median;


