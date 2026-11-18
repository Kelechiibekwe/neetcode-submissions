class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        let sCount = this.mapCount(s);
        let tCount = this.mapCount(t);

        //Convert to String
        let sStr = sCount.join();
        let tStr = tCount.join();

        return sStr === tStr;

    }

    mapCount(word){
        const count = new Array(26).fill(0);
        for(let i = 0; i < word.length; i++){
            count[word.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }
        return count;
    }
}
