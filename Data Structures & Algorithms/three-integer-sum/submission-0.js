class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let res = [];
        nums.sort((a,b)=>(a-b));
        let i = 0;
        while(i < nums.length){
            while( i > 0 && nums[i] === nums[i-1]){
                i++;
            }
            let l = i + 1;
            let r = nums.length - 1;

            while(l < r){
                let sum = nums[i] + nums[l] + nums[r];
                if(sum > 0){
                    r--;
                } else if(sum < 0) {
                    l++;
                } else {
                    res.push([nums[i],nums[l],nums[r]]);
                    l++;
                    r--;
                    while( l < r && nums[l] === nums[l-1]) l++;
                    while( r > l && nums[r] === nums[r+1]) r--;
                }
                
            }
            i++;
        }
        return res;
    }

   //-4, -1, -1, 0, 1, 2
}
