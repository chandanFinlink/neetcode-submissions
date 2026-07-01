class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        const arr = nums.sort(function(a, b){return a - b});

        let prev = null;
        for (const num of arr){
            
            if(prev==null){
                prev = num;
                continue;
            }

            if(prev==num){
                return true;
            }
            prev = num;
        }
        return false;

    }
}
