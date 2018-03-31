'use strict';

function compute_average(collection) {
  //在这里写入代码
  let result = collection.reduce((total,num) => total+num)/collection.length
  return  result
}

module.exports = compute_average;

