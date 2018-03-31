'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  let result = collection.reduce((init_value,num) => init_value > num ? init_value:num)
  return result
}

module.exports = collect_max_number;
