/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    
    let n1s = new Set(nums1)
    let n2s = new Set(nums2)

    let i = 0
    for(let e of nums1){
        if(n2s.has(e)){
           i++
        }
    }

     let j = 0
    for(let e of nums2){
        if(n1s.has(e)){
           j++
        }
    }

   return [i,j]
};