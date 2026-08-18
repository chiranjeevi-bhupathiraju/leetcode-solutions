function getFinalState(nums: number[], k: number, multiplier: number): number[] {
    

       for(let i=k; i>0; i--){
       let minV = Math.min(...nums)
          for(let i=0; i<nums.length; i++){
            if(nums[i] == minV){
                nums[i] = nums[i]*multiplier
                break;
            }
          }
       }
  return nums
};