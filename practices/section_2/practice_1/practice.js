function count_same_elements(collection) {
  //在这里写入代码
  let result = []
  let key_value = []
  for(let ele of collection){
    if(!key_value.includes(ele)){
      count = collection.filter(item => item === ele).length
      key_value.push(ele)
      result.push({key:ele,count:count})
    }
  }
  return result
}

module.exports = count_same_elements;
