'use strict';

function get_union(collection_a, collection_b) {
  var collection_c = []
  var collection = collection_a.concat(collection_b)
  for(var i= 0;i<collection.length;i++){
    var flag = true
    for(var j = 0; j < collection_c.length; j ++) {
      if(collection[i] === collection_c[j]) {
        flag = false;
        break;
      }
    }
    if(flag) {
      collection_c.push(collection[i])
    }
  }

  return (collection_c)
}

module.exports = get_union;

