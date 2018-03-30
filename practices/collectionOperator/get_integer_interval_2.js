'use strict';

function get_integer_interval_2(number_a, number_b) {
  var integer_interval =[]
  if(number_a<number_b){
    for(var i=number_a;i<= number_b;i++){
      if(i%2==0){
        integer_interval.push(i)
      }
    }
  }
  if(number_a>number_b){
    for(var j=number_a;j>= number_b;j--){
      if(j%2==0){
        integer_interval.push(j)
      }
    }
  }
  if(number_a==number_b && number_a%2==0){
    integer_interval.push(number_a)
  }
  // if(number_a==number_b && number_a%2!==0){
  //   integer_interval.push(number_a)
  // }
  return integer_interval
}

module.exports = get_integer_interval_2;
