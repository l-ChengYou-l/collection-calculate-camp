'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  let result = []
  for(let ele of collection){
    if(ele%2!==0){
      result.push(ele*3+5)
    }
  }
  return result.reduce((total,num) => total + num)
}

module.exports = hybrid_operation_to_uneven;

