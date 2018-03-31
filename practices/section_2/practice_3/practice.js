function count_same_elements(collection) {
  //在这里写入代码
  /*let result = []
  let name_value = []
  let arr = []
  for(let ele of collection){
    if(ele.indexOf('-')> -1){
      arr = ele.split('-')
      result.push({name:arr[0],summary:Number(arr[1])})
    }else if(ele.indexOf(':')> -1){
      arr = ele.split(':')
      result.push({name:arr[0],summary:Number(arr[1])})
    } else{
      if(!name_value.includes(ele)){
        count = collection.filter(item => item === ele).length
        name_value.push(ele)
        result.push({name:ele,summary:count})
      }
    }
  }
  return result*/
  let result = [];
  let lastresult = [];
  let count = 0;
  let temp = collection[0];
  //传入元素全部遍历添加结果
  for (let i = 0; i < collection.length; i++) {
    if (temp === collection[i]) {
      count++;
    }
    if (temp != collection[i]) {
      result.push({
        key: temp,
        count: count
      });
      temp = collection[i];
      count = 1;
    }
    if (collection[i].length > 2) {
      temp = collection[i].slice(0, 1);
      count = collection[i].slice(2);
      count = parseInt(count);
      result.push({
        key: temp,
        count: count
      });
      count = 0;
    }
  }
  // 再次遍历添加后的结果合并相同元素数量
  let name = result[0].key;
  let summary = result[0].count;
  for (let j = 1; j < result.length; j++) {
    if (name === result[j].key) {
      summary += result[j].count;

    }
    if (name != result[j].key) {
      lastresult.push({
        name: name,
        summary: summary
      });
      name = result[j].key;
      summary = result[j].count;
    }
  }
  lastresult.push({
    name: result[result.length - 1].key,
    summary: result[result.length - 1].count
  })
  return lastresult;
}

module.exports = count_same_elements;
