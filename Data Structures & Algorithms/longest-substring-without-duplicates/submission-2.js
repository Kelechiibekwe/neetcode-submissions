class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let maxLength = 0;
        const sub = new Set();
        for(let r = 0; r < s.length; r++){
            // if(!sub.contains(s[r])){
            //     sub.add(s)
            // }

            while(sub.has(s[r])){
                sub.delete(s[l]);
                l++;
            }
            sub.add(s[r]);
            maxLength = Math.max(maxLength, r - l + 1);
        }

        return maxLength;
    }
}
