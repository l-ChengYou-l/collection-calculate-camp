'use strict';

function get_letter_interval(number_a, number_b) {
  var letter_interval =[]
  if(number_a<number_b){
    for(var i=number_a;i<= number_b;i++){
      letter_interval.push(String.fromCharCode(i+96))
    }
  }
  if(number_a>number_b){
    for(var j=number_a;j>= number_b;j--){
      letter_interval.push(String.fromCharCode(j+96))
    }
  }
  if(number_a==number_b){
    letter_interval.push(String.fromCharCode(number_a+96))
  }
  return letter_interval
}

module.exports = get_letter_interval;
