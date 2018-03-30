'use strict';

function get_integer_interval(number_a, number_b) {
  var integer_interval =[]
  if(number_a<number_b){
    for(var i=number_a;i< number_b;i++){
      integer_interval.push(number_a++)
    }
  }
  if(number_a>number_b){
    for(var i=number_a;i> number_b;i--){
      integer_interval.push(number_a--)
    }
  }
  if(number_a=number_b){
      integer_interval.push(number_a)
  }
  return integer_interval
}

module.exports = get_integer_interval;

