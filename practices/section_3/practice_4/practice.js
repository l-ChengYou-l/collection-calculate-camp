function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let result = []
  let key_value = []
  let count = 0
  let arr = []
  for(let ele of collection_a){
    if(ele.indexOf('-')!= -1){
      arr = ele.split('-')
      result.push({key:arr[0],count:Number(arr[1])-Math.floor(Number(arr[1])/3)})
    }else {
      if (!key_value.includes(ele)) {
        count = collection_a.filter(item => item === ele).length
        key_value.push(ele)
        if (object_b.value.includes(ele)) {
          result.push({key: ele, count: count - Math.floor(count / 3)})
        } else {
          result.push({key: ele, count: count})
        }
      }
    }
  }
  return result
}

module.exports = create_updated_collection;
