class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const unique = new Set();
        for(let num of nums){
            if(unique.has(num)){
                return true;
            }
            unique.add(num);
        }
        return false;
    }
}
