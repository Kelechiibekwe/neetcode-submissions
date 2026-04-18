class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0,
            r = heights.length - 1;
        let max = 0;

        while(l < r){
            let length = r - l;
            let height = Math.min(heights[r],heights[l]);
            let volume = length * height;
            max = Math.max(max,volume);
            if(heights[l] < heights[r]){
                l++;
            } else {
                r--;
            }
        }

        return max;
    }
}
