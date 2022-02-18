function highAndLow(numbers){
  // ...
  let num = numbers.split(' ').map(n => parseInt(n));
  
  
   let result = num.sort(function(a, b){return a-b});
console.log(result)
  

 return  `${result[result.length-1]} ${result[0]}`  
  
  
}
