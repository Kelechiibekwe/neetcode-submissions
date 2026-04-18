class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {

        const prefixSum = new Map();
        let res = 0, curSum = 0;
        prefixSum.set(0,1);

        for(let num of nums){
            curSum += num;
            let diff = curSum - k;
            res += prefixSum.get(diff) || 0;
            prefixSum.set(curSum, (prefixSum.get(curSum) || 0) + 1);
        }
        return res;

    }
}
