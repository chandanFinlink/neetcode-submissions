class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

      let arr = {}
      let i=0;
      while (i < nums.length){
         const required = target - nums[i];
         const current = nums[i];

         if(arr[required] !== undefined){
            return [arr[required],i];
         }

         arr[current] = i;

         i++;
      }

      return [];

    

    }
}
