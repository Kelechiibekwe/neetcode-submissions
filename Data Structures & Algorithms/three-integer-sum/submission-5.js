class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let l = 0;
        let r = nums.length - 1;
        nums.sort((a,b)=>(a-b));
        let i = 0;
        let res = [];

        while(i < nums.length){
            if(nums[i] > 0){
                break;
            }
            while(i > 0 && nums[i] === nums[i-1]){
                i++;
            }
            let l = i + 1;
            let r = nums.length - 1;
            while(l < r){
                let sum = nums[l] + nums[r] + nums[i];
                if(sum < 0){
                    l++;
                } else if(sum > 0){
                    r--;
                } else {
                    let arr = [nums[r],nums[l],nums[i]];
                    res.push(arr);
                    l++;
                    r--;
                    while(l < r && nums[l] === nums[l-1]){
                        l++;
                    }
                    while(r > l && nums[r] === nums[r+1]){
                        r--;
                    }
                    
                }
            }
            i++;
        }

        return res;
    }
}
