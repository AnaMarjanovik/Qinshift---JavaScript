function removeFalsyValues(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        result.push(arr[i]);
      }
    }
    return result;
  }


        
console.log(removeFalsyValues([0, null, undefined, NaN, "", false, 1, "hello", [], {}, true,30]));