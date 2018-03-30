'use strict';

function choose_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var result = collection_a.filter(ele => collection_b.includes(ele))
  return result
}

module.exports = choose_common_elements;
