class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let l = 0;
        let res = Infinity;
        let sum = 0;

        for(let r = 0; r < nums.length; r++){
            sum += nums[r];
            while (l <= r && sum >= target){
                res = Math.min(res, r - l + 1);
                sum -= nums[l];
                l++;
            } 
        }

        return res === Infinity ? 0 : res;
    }
}
