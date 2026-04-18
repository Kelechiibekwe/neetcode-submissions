class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
            var res = [];
            var postfix = 1;
            var prefix = 1;

            for(var i = 0; i < nums.length; i++){
                res[i] = prefix;
                prefix*=nums[i];
            }

            for(var i = nums.length - 2; i >= 0; i--){
                postfix*=nums[i+1];
                res[i]*=postfix;
            }
        return res;
    }
}
