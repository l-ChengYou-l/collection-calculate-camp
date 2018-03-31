function count_same_elements(collection) {
  //在这里写入代码
  let result = []
  let key_value = []
  let arr = []
  for(let ele of collection){
    if(ele.indexOf('-')!= -1){
      arr = ele.split('-')
      result.push({key:arr[0],count:Number(arr[1])})
    }else{
      if(!key_value.includes(ele)){
        count = collection.filter(item => item === ele).length
        key_value.push(ele)
        result.push({key:ele,count:count})
      }
    }
  }
  return result
}

module.exports = count_same_elements;
