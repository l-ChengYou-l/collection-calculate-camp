'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  collection.sort((a,b) => a-b);
  for (var i=0; i< collection.length;i++) {
    if ((i + 1) % 3 === 0) {
      let a = collection[i - 2];
      collection[i - 2] = collection[i - 1];
      collection[i - 1] = collection[i];
      collection[i] = a;
    }
  }
  return collection;

}
module.exports = rank_by_two_large_one_small;
