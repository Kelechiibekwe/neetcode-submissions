class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temps) {
        const res = new Array(temps.length).fill(0);
        const stack = [];

        for(let i = 0; i < temps.length; i++){
            const t = temps[i];
            while(stack.length > 0 && t > stack[stack.length-1][0]){
                const[stackT, stackInd] = stack.pop();
                res[stackInd] = i - stackInd;
            }
            stack.push([t,i]);
        }
        return res;
    }
}
