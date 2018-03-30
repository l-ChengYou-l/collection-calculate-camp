'use strict';

function choose_no_repeat_number(collection) {
  var no_repeat=[]
  for(var i= 0;i<collection.length;i++){
    for(var j= 0;i<collection.length;j++){
      if(collection[i] !== collection[j]) {
        no_repeat.push(collection[i])
      }
    }
  }
  return no_repeat
}

module.exports = choose_no_repeat_number;
