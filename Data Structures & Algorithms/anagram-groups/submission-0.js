class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const output = [];
        const frequecyMap = {};
        for (const str of strs) {
            const shorted = str.split("").sort().join("");
            frequecyMap[shorted] = frequecyMap[shorted] ?? [];
            frequecyMap[shorted].push(str);
        }
        return Object.values(frequecyMap);
    }
}
