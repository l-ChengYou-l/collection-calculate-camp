'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  let result = collection.reduce((total,num) => total + num)
  return result
}

module.exports = calculate_elements_sum;

