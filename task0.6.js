function maxNumbers(...nums)  {
    var max = -Infinity;
    for(var i = 0; i < nums.length; i++){
       if(nums[i] > max){
          max = nums[i];
       };
    };
    return max;
 }
console.log(maxNumbers(4,30,7,23,26,1));

   