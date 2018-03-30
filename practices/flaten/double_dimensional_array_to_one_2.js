'use strict';

function double_to_one(collection) {

  //在这里写入代码
  let result = Array.from(new Set([].concat.apply([],collection)))

  return result
}

module.exports = double_to_one;
