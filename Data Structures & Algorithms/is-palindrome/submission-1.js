class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0,
        r = s.length - 1;

        while(l < r){
            while( l < r && !this.isAlphaNumeric(s[l])) l++;
            while(r > l && !this.isAlphaNumeric(s[r])) r--;

            if(s[l].toLowerCase() !== s[r].toLowerCase()){
                return false;
            } 
            l++;
            r--;
        }
        return true;
    }

    isAlphaNumeric(s){
        return(
            (s >= 'a' && s <= 'z') ||
            (s >= 'A' && s <= 'Z') ||
            (s >= '0' && s <= '9')
        )
    }
}
