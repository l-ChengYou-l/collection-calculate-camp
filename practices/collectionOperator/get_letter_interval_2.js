'use strict';

function get_letter_interval_2(number_a, number_b) {
  var alphabet = [' ','a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y',
    'z']
  var letter_interval =[]
  if(number_a<number_b){
    for(var i=number_a;i<= number_b;i++){
      if(i/26<=1){
        letter_interval.push(alphabet[i])
      }else{
        var first = Math.ceil(i/26)-1
        var secend = i%26
        if(secend!==0){
          letter_interval.push(alphabet[first] + alphabet[secend])
        }
        else{
          letter_interval.push(alphabet[first] + alphabet[26])
        }
      }
    }
  }

  if(number_a>number_b){
    for(var j=number_a;j>= number_b;j--){
      if(j/26<=1){
        letter_interval.push(alphabet[j])
      }else{
        var first = Math.ceil(j/26)-1
        var secend = j%26
        if(secend!==0){
          letter_interval.push(alphabet[first] + alphabet[secend])
        }
        else{
          letter_interval.push(alphabet[first] + alphabet[26])
        }
      }
    }
  }
  if(number_a==number_b){
      if(number_a/26<=1){
        letter_interval.push(alphabet[number_a])
      }else{
        var first = parseInt(number_a/26)
        var secend = number_a%26
        letter_interval.push(alphabet[first] + alphabet[secend])
      }
  }
  return letter_interval
}

module.exports = get_letter_interval_2;

