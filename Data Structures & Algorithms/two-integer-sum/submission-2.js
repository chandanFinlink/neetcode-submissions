class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

      let seen = {}
      let i=0;
      while (i < nums.length){
         const required = target - nums[i];
         const current = nums[i];

         if(seen[required] !== undefined){
            return [seen[required],i];
         }

         seen[current] = i;

         i++;
      }

      return [];   

    }
}
