class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {

        let i = 0;
        let secondMax = 0;
        let max = 0;

        while (i < nums.length) {

            if (nums[i] == 1) {
                max++;
            }else {
                if(secondMax<max){
                    secondMax =max;
                }
                max=0
            }
            i++;
        }

        return Math.max(max,secondMax);


    }
}
