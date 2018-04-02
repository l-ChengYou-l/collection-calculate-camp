'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  let result = []
  collection.map(ele => {
    if(ele%2 ===0){
      result.push(String.fromCharCode(ele+96))
    }
  })
  return result
}

module.exports = even_to_letter;
