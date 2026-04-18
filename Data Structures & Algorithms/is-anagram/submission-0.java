class Solution {
    public boolean isAnagram(String s, String t) {
      String[] sList = s.split("");
      String[] tList = t.split("");

      Arrays.sort(sList);
      Arrays.sort(tList);

      return Arrays.equals(sList,tList);
    }
}
