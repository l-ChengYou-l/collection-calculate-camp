'use strict';
var single_element = function(collection){
  let evenArr = collection.filter((item, index) => (index + 1) % 2 === 0);
  let result = [];
  evenArr.forEach(function(item) {
    if (evenArr.indexOf(item) === evenArr.lastIndexOf(item)) {
      result.push(item);
    }
  });
  return result;
};
module.exports = single_element;
