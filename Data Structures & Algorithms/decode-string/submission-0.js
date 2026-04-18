class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        const countStack = [];
        const stringStack = [];
        let k = 0;
        let cur = '';

        for(let c of s){
            if(!isNaN(c)){
                k = k * 10 + parseInt(c,10);
            } else if (c === '['){
                stringStack.push(cur);
                countStack.push(k);
                k = 0;
                cur = '';
            } else if (c === ']'){
                const temp = cur;
                cur = stringStack.pop();
                const count = countStack.pop();
                cur += temp.repeat(count);
            } else {
                cur += c;
            }
        }
        return cur;
    }
}
