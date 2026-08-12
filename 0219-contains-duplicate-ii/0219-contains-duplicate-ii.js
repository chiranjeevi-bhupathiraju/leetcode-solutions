/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
   let map = new Map()
   let i = 0
   for(let num of nums){
     if(!map.has(num)) map.set(num,[])
     map.get(num).push(i)
     i++
   }

   for(let [e,indexes] of map){
         for(i=1;i<indexes.length;i++){
            let ci = indexes[i]
            let pi = indexes[i-1]

            if(Math.abs(ci-pi)<= k){
                return true
            }
         }
   }

   return false
};