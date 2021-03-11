
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

  return res/arr.length
}

