class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let res = 0;
        const stack = [];
        for (let val of operations){
            if(isNaN(val)){
                if(val === "+"){
                    let a  = stack[stack.length - 1];
                    let b  = stack[stack.length - 2];
                    stack.push(a + b);
                } else if(val === "D"){
                    let a  = stack[stack.length - 1];
                    stack.push(2 * a);
                } else if(val === "C"){
                    stack.pop();
                }
            } else {
                stack.push(Number(val));
            }
        }

        // for (let val of stack){
        //     res+=val;
        // }

        return stack.reduce((a, b) => a + b, 0);;
    }
}
