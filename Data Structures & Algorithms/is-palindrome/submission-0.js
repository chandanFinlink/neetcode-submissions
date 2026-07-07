class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        function isAlphanumeric(char) {
            return (
                (char >= "0" && char <= "9") || // Checks numbers
                (char >= "A" && char <= "Z") || // Checks uppercase
                (char >= "a" && char <= "z")
            ); // Checks lowercase
        }

        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            // 1. Move left pointer if current character is invalid
            if (!isAlphanumeric(s[l])) {
                l++;
                continue;
            }
            // 2. Move right pointer if current character is invalid
            if (!isAlphanumeric(s[r])) {
                r--;
                continue;
            }

            // 3. Both pointers are on valid characters; compare them
            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }

            // 4. Move inward
            l++;
            r--;
        }
        return true;
    }
}
