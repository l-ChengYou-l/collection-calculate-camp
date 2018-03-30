'use strict';

function choose_even(collection) {
  var even_collection = collection.filter(function(ele){
    return ele % 2 == 0
  })
  return even_collection
}

module.exports = choose_even;
