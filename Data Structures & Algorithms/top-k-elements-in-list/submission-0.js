class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        const freq = Array.from({length: nums.length + 1},()=>[])

        for(let num of nums){
            map.set(num, ((map.get(num) || 0 )+ 1));
        }
        
        for(let [key, value] of map){
            freq[value].push(key);
        }

        const res = [];

        for(let i = freq.length - 1; i > 0; i--){
            for(let num of freq[i]){
                res.push(num);
                if(res.length === k){
                    return res;
                }
            }
        }

        return res;
    }
}
