class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans = new Array((nums.length*2))
        for(let index = 0; index < nums.length; index++){
            ans[index] = nums[index];
            ans[index + nums.length] = nums[index];
        }

        return ans;
    }
}
