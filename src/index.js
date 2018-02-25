module.exports = function getZerosCount(number) {
  // your implementation
  let result = 0;
  while(number > 0) {
    number /= 5;
    result += Math.floor(number);
  }
  result += number / 2;
  return result;
}

/*
getZerosCount(84583674); //21145911
getZerosCount(15949280); //3987315
getZerosCount(71619670); //17904912

*/
