
exports.min = function min (array) {
  const arr = array || [];
  if(arr.length == 0){return 0}
  
  const res = arr.reduce((prev,current)=>{
    return prev>current?current:prev
  },0);

  return +res
}

exports.max = function max (array) {
  const arr = array || [];
  if(arr.length == 0){return 0}
  
  const res = arr.reduce((prev,current)=>{
    return prev<current?current:prev
  },0)
  return +res
}

exports.avg = function avg (array) {
  const arr = array || [];

  if(arr.length == 0){return 0}
  
  const res = arr.reduce((prev,current)=>{
    return prev + current
  },0)

  // return Math.floor(res/arr.lenth)
  return res/arr.length
}

let avgValue = exports.avg();
console.log(avgValue)
avgValue = exports.avg([]);
console.log(avgValue)
avgValue = exports.avg([-39,30,-32,-9,3,-2,-11,-4,-32,39,0,-14,7,20,-12,22,-23,19,0,2]);
console.log(avgValue)

