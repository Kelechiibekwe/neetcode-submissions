class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let sub_string = new Set();
        let max = 0;
        for(let r = 0; r < s.length; r++){
            while(sub_string.has(s[r])){
                sub_string.delete(s[l]);
                l++;
            }
            sub_string.add(s[r]);
            max = Math.max(max,(r - l + 1));
        }
        return max;
    }
}
