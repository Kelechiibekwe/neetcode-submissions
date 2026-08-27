class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const map = {
            "]":"[",
            "}":"{",
            ")":"(",
        }

        for (let l of s){
            if(map[l]){
                if(stack.length > 0 && map[l] === stack[stack.length - 1]){
                    stack.pop() 
                } else {
                    return false;
                }
            } else {
                stack.push(l);
            }
        }
        return stack.length === 0;
    }
}
