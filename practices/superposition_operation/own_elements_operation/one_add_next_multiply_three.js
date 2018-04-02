'use strict';
function one_add_next_multiply_three(collection){
  let result = collection.map((item,index,array) => (item+array[index+1])*3)
  result.pop()
  return result;
}
module.exports = one_add_next_multiply_three;
