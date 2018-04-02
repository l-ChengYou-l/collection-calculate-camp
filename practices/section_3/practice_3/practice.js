function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let result = []
  let key_value = []
  let count = 0
  for(let ele of collection_a){
    if(!key_value.includes(ele)){
      count = collection_a.filter(item => item === ele).length
      key_value.push(ele)
      if(object_b.value.includes(ele)){
        result.push({key: ele, count:count - Math.floor(count/3)})
      }else{
        result.push({key: ele, count: count})
      }
    }

  }
  return result
}

module.exports = create_updated_collection;
