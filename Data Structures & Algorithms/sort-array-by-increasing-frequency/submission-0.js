class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    frequencySort(nums) {

        const freq = new Map();
        const res = [];

        for(let num of nums){
            freq.set(num,(freq.get(num) || 0) + 1);
        }

        nums.sort((a, b) => freq.get(a) - freq.get(b) || b - a)
        return nums;
    }
}
