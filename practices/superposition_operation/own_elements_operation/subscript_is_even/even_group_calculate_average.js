'use strict';
var even_group_calculate_average = function(collection){
  let evenArr = collection.filter(function(item, index) {
    return ((index + 1) % 2 === 0);
  }); //首先选出所有第偶数个元素
  let isEvenArr = evenArr.filter(function(item) {
    return (item % 2 === 0);
  }); //然后选出其中的偶数
  isEvenArr.sort(function(a, b) {
    return a - b;
  }); //排序
  let result = [];
  if (isEvenArr.length === 0) {
    return [0]; //不含偶数的情况
  } else {
    for (var i = 1; i <= isEvenArr[isEvenArr.length - 1].toString().length; i++) {

      let filterResult = isEvenArr.filter(function(item) {
        return (item.toString().length === i);
      });

      if (filterResult.length != 0) {//判断含有几位数字

        let filterSum = filterResult.reduce(function(prev, cur) {
          return prev + cur;
        });

        result.push(filterSum / filterResult.length);
      }
    }
    return result;
  }
};
module.exports = even_group_calculate_average;
