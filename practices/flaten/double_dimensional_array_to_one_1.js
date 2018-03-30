'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var result = [].concat.apply([],collection)
  return result
}

module.exports = double_to_one;
