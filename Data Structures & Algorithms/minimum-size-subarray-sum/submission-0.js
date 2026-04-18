class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let l = 0;
        let total = 0;

        let res = Infinity;

        for(let r = 0; r < nums.length; r++){
            total += nums[r];
            while(total >= target){
               total -= nums[l];
               res = Math.min(r-l+1,res);
               l++; 
            }

        }

        return res === Infinity ? 0 : res;

    }
}
