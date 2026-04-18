class Solution {
    public boolean isPalindrome(String s) {
        String inputString = s;// for readability 

        // Remove all non alpha numeric characters 
        String regex = "[^a-zA-Z0-9]";// pattern to replace all non-alpha numeric characters
        String cleanStr = inputString.replaceAll(regex,"");

        // Make all string lower case 
        String lowerCaseCleanStr = cleanStr.toLowerCase();

        // reverse strings 
        String[] newStrArr = lowerCaseCleanStr.split("");
        String[] reversedStrArr = new String[newStrArr.length];
        int normalizer = newStrArr.length - 1;
        for(int index = 0; index < newStrArr.length; index++){
            reversedStrArr[normalizer - index] = newStrArr[index];
        }
        
        // Compare strings
        return Arrays.equals(reversedStrArr,newStrArr); 
    }
}
