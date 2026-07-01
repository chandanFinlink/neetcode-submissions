class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length){
            return false;
        }

        const frequencyMap ={};

        for (const char of s){
            frequencyMap[char] = (frequencyMap[char] ||0 ) +1;
        }

        for (const char of t){
            if(!frequencyMap[char]){
                return false;
            }else{
                frequencyMap[char]--;
            }
        }

        return true;

    }
}
