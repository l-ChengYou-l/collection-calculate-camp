'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  let ave_num = Math.ceil(collection.reduce((total,num) => (total + num))/collection.length)
  return String.fromCharCode(ave_num+96)

}

module.exports = average_to_letter;

