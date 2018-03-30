'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  let  result = []
  collection_a.filter(function(ele) {
    for(let item of collection_b){
      if(ele%item===0){
        result.push(ele)
      }
    }
  })
  return result
}

module.exports = choose_divisible_integer;
