/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
/* var reverseString = function (s) {
  let n = s.length;
  for (let i = 0; i < n / 2; i++) {
    let temp = s[i];
    s[i] = s[n - 1 - i];
    s[n - 1 - i] = temp;
  }
}; */ //use temp to swap
var reverseString = function (s) {
  let n = s.length, left = 0, right = n - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++; right--;
  }
};
/*
Time: O(n)
Space: O(1)
 */
// @lc code=end
