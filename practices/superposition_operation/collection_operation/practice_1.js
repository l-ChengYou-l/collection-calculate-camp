'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  return collection.reduce((total,num) =>  total + num*3+2)+collection[0]*3+1
}

module.exports = hybrid_operation;

