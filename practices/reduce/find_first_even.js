'use strict';

function find_first_even(collection) {
  //在这里写入代码
  for(var ele of collection){
    if(ele%2===0){
      return ele
    }
  }

}

module.exports = find_first_even;

