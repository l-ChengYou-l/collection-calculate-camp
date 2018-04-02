'use strict';

function amount_even(collection) {

  //在这里写入代码
  return collection.filter(ele => ele%2==0).reduce((total,num) => total + num)
}

module.exports = amount_even;
