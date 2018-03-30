'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var result = {};
  collection.filter(ele => result[ele]==undefined ? result[ele] = 1 : ++result[ele] );
  return result;
}

module.exports = grouping_count;
