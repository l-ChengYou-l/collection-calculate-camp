'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  let result = collection.reduce((init_value,num) => init_value < num ? init_value:num)
  return result
}

module.exports = collect_min_number;

