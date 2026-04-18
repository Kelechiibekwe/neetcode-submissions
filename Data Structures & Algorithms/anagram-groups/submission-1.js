class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for(let str of strs){
            let count = new Array(26).fill(0);
            for(let c of str){
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }
            let key = count.join('#');
            let value = map.get(key) || [];
            value.push(str);
            map.set(key, value);
        }

        return [...map.values()];
    }
}
