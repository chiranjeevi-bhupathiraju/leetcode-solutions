/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
      let i=0
      for(j=1;j<nums.length;j++){
        if(nums [j] === nums[i]){
            nums[i] = nums[i]*2
            nums[j] = 0
        }
         i++
      }
    
      let index = 0;
      for (k=0;k<nums.length;k++){
        if(nums[k] !== 0){
            nums[index] = nums[k]
            index++
        }
      }

       while (index < nums.length) {
           nums[index] = 0
           index++
       }
      

       return nums

        
      
};