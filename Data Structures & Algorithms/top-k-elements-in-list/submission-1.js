class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequencyMap = {};
        const n = nums.length;

        // Step 1: Count frequencies
        for (const num of nums) {
            frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        }

        // Step 2: Create buckets
        const buckets = Array.from({ length: n + 1 }, () => []);
        for (const [num, frequency] of Object.entries(frequencyMap)) {
            buckets[frequency].push(Number(num));
        }

        // Step 3: Gather top k elements
        const result = [];
        for (let i = buckets.length - 1; i >= 0; i--) {
            if (buckets[i].length > 0) {
                for (const num of buckets[i]) {
                    result.push(num);
                    if (result.length === k) {
                        return result;
                    }
                }
            }
        }
        return result;
    }
}
