class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];

        for(let l of operations){
            let sLen = stack.length
            if(isNaN(Number(l))){
                if(l === "+"){
                    let val1 = stack[sLen - 1];
                    let val2 = stack[sLen - 2];
                    stack.push(val1 + val2)
                } else if ( l === "D"){
                    let val1 = stack[sLen - 1];
                    stack.push(val1 * 2);
                } else if (l === "C"){
                    stack.pop();
                }

            } else {
                stack.push(Number(l))
            }
        }


        return stack.reduce((a, b) => a + b, 0);
    }
}
