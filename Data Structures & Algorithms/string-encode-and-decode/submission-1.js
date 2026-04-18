class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = []
        for (let str of strs){
            res.push(str.length + "#" + str);
        }
        return res.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let i = 0;
        while(i < str.length){
            let j = i;
            while (str[j] != "#"){
                j++;
            }

            let length = parseInt(str.substring(i,j));
            i = j + 1;
            j = i + length;
            let s = str.substring(i,j);
            res.push(s);
            i = j;
        }
        return res;
    }
}
