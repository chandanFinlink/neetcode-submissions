class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, k) {
        let f = 0;
        let l = numbers.length - 1;

        for (let i = 0; i < numbers.length - 1; i++) {
            if (numbers[f] + numbers[l] > k) {
                l--;
                continue;
            }

            if (numbers[f] + numbers[l] < k) {
                f++;
                continue;
            }
        }

        return [f+1,l+1]
    }
}
