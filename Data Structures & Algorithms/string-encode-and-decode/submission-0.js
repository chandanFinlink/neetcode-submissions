class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = "";
        for (const st of strs) {
            encodedStr += st.length + "#" + st;
        }
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str == "") return [];

        const decoded = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            while (str[j] !== "#") {
                j++;
            }

            const strLength = parseInt(str.substring(i, j), 10);

            i = j + 1;
            const string = str.substring(i, i + strLength);
            decoded.push(string);
            i += strLength;
        }

        return decoded;
    }
}
