class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let vol = 0;
        let left = 0;
        let right = heights.length - 1;

        for (let i = 0; i < heights.length; i++) {
            const height = Math.min(heights[left], heights[right]);
            const width = right - left;

            const area = height * width;

            vol = Math.max(area, vol);

            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return vol;
    }
}
