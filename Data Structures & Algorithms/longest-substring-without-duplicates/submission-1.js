class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        const subString = new Set();
        let max = 0;
        let l = 0;
        for(let r = 0; r < s.length; r++){
            while (subString.has(s[r])){
                subString.delete(s[l]);
                l++;
            }

            max = Math.max(max,r-l+1);
            subString.add(s[r]);
        }
        return max;
    }
}
