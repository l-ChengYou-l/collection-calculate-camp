'use strict';

function choose_multiples_of_three(collection) {
  var even_collection = collection.filter(function(ele){
    return ele % 3 == 0
  })
  return even_collection
}

module.exports = choose_multiples_of_three;
