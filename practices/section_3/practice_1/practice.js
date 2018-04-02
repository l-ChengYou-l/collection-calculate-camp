function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let result = []
  for(let ele of collection_a ){
    if(object_b.value.includes(ele.key)){
      result.push({key: ele.key, count: ele.count-1})
    }else{
      result.push({key: ele.key, count: ele.count})
    }
  }
  return result
}

module.exports = create_updated_collection;
