class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let pair = position.map((p,i) => [p, speed[i]]);

        pair.sort((a,b)=>(b[0] - a[0]));
        const stack = [];
        for(let[pos,spd] of pair){
            stack.push((target - pos)/spd);
            const stackLength = stack.length;
            if(stack.length >= 2 && 
                stack[stackLength - 1] <= stack[stackLength - 2]){
                    stack.pop();
                }
        }
        return stack.length
    }
}
