function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var result = [];
  for (var ele of collection_a) {
    for (var j in object_b.value) {
      if (ele.key === object_b.value[j]) {
        result.push(ele.key);
      }
    }
  }
  return result;

  /*let result = [];
  collection_a.map(item => {
    if (object_b.value.filter(element => element === item.key).length !== 0) {
      result.push(item.key);
    }
  });

  return result;*/
}

module.exports = collect_same_elements;
