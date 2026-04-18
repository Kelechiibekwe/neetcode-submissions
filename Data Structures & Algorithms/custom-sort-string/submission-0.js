class Solution {
    /**
     * @param {string} order
     * @param {string} s
     * @return {string}
     */
    customSortString(order, s) {

    const freq = new Map();
    const res = [];

    for (let letter of s){
        freq.set(letter, (freq.get(letter) || 0) + 1);
    }

    for(let letter of order){
        while(freq.get(letter) > 0){
            res.push(letter);
            freq.set(letter, freq.get(letter) - 1);
        }
    }

    for(let [c, f] of freq){
        while(f-- > 0){
            res.push(c);
        }
    }

    return res.join("");
    }
}
