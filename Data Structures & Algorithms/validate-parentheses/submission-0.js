class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        var stack = [];
        var closedToOpen = {
            ")":"(",
            "}":"{",
            "]":"["
        }

        // iterate through the string
        // check if the string is a closing bracket else add to the list
        // if closed bracket, check if recent item in list matches it

        for(var char of s){
            if (char in closedToOpen){
                if (stack.length>0 && stack[stack.length-1] === closedToOpen[char]){
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }

        return stack.length === 0;
    }
}
