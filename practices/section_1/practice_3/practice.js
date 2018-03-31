function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let result = []
  collection_a.filter(ele => {
    if(object_b.value.includes(ele)){
      result.push(ele)
    }
  })
  return result
}

module.exports = collect_same_elements;
