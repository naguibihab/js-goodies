// Flattens out a nested json

function flatten(myArr, resArr){
  for(let i in myArr) {
    var postfix = Math.floor(Math.random()*90000) + 10000;
    if(typeof myArr[i] == 'object'){
      resArr = flatten(myArr[i],resArr)
    } else {
      resArr[i+'__'+postfix] = myArr[i]
    }
  }
  return resArr;
}

var myJson = {
  "something":"123",
  "parent": {
    "string":"231",
    "parent2": {
      "string":"abc"
    }
  }
}

console.log(flatten(myJson,{}));
