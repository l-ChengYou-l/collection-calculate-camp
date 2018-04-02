'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  let result = ''
  let num
  let length = collection.length
  if(length %2 ==0){
    num = Math.ceil((collection[length/2-1]+collection[length/2])/2)
  }else{
    num = collection[Math.floor(length/2)]
  }
  if(num/26<=1){
    result = getAllLetter()[num-1]
  }else{
    var first = Math.ceil(num/26)-2
    var secend = num%26-1
    if(secend!==0){
      result = getAllLetter()[first] + getAllLetter()[secend]
    }
    else{
      result = getAllLetter()[first] + getAllLetter()[26]
    }
  }
  function getAllLetter() {
    let allLetter = [];
    for (let i = 97; i < 97 + 26; ++i)
      allLetter.push(String.fromCharCode(i));

    return allLetter;
  }
  return result
}

module.exports = median_to_letter;
