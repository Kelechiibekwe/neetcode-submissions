class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const countMap = new Map();

        for(let str of strs){
            let strCount = this.mapCount(str);
            if(!countMap.has(strCount)){
                countMap.set(strCount,[]);
            }
            countMap.get(strCount).push(str);
        }

        return Array.from(countMap.values());
    }

    mapCount(word){
        const count = new Array(26).fill(0);
        for(let c of word){
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        return count.join();
    }
}
