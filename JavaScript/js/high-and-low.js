//JavaScript problem
function highAndLow(numbers){
  let arr = numbers.split(' ').map(Number);
   
   let min = arr[0];
   let max = arr[0];
   
   arr.forEach((elem) => {
     
     if(elem > max) {
       max = elem;
     }
     
     if(elem < min) {
       min = elem;
     }
     
   });
   return max + ' ' + min;
 }

 //Another solution
 function highAndLowOptimize(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

/*
return the highest and lowest number.
Example: 
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6") //return "542 -214"


highAndLowOptimize("1 2 -3 4 5"); // return "5 -3"
highAndLowOptimize("1 9 3 4 -5"); // return "9 -5"
*/