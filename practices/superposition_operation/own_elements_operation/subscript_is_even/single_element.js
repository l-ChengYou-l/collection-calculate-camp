'use strict';
var single_element = function(collection){
  let evenArr = collection.filter((item, index) => (index + 1) % 2 === 0);
  let result = [];
  evenArr.forEach(function(item,array) {
    if (array.indexOf(item) === array.lastIndexOf(item)) {
      result.push(item);
    }
  });
  return result;
};
module.exports = single_element;
