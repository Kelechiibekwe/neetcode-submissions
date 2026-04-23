class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let l = 0;
        let r = nums.length;
        //let res = 0;
        
        while(l < r){
            let mid = Math.floor((r + l)/2);
            if(nums[mid] < target){
                l = mid + 1;
            } else {
                r = mid;
            }
        }


        return l;
    }
}
