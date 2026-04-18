class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
    
        //rotate entire array
        let l = 0;
        let r = nums.length - 1;

        let numOfRotation = k % (nums.length)

        this.partialRotate(nums,l,r);

        //rotate first half
        l = 0;
        r = numOfRotation - 1;
        this.partialRotate(nums,l,r);

        //rotate second half
        l = numOfRotation;
        r = nums.length - 1;
        this.partialRotate(nums,l,r);
    }

    partialRotate(nums,l,r){
        while(l < r){
            [nums[l],nums[r]] = [nums[r],nums[l]];
            l++;
            r--;
        }
    }
}
