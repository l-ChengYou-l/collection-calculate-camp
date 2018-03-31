'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  let result = []
  result.push(number)
  while(number>0){
    number = (number*10-interval*10)/10
    if(number===0){
      result.push(0)
    }else{
      result.push(number)
    }
  }
  return result
}

module.exports = spilt_to_zero;
