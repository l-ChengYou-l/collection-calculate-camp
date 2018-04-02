'use strict';

function average_uneven(collection) {

  //在这里写入代码
  return collection.filter(ele => ele%2!==0).reduce((total,num) => total + num)/5
}

module.exports = average_uneven;
