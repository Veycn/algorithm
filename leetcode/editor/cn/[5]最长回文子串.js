//给你一个字符串 s，找到 s 中最长的回文子串。
//
//
//
// 示例 1：
//
//
//输入：s = "babad"
//输出："bab"
//解释："aba" 同样是符合题意的答案。
//
//
// 示例 2：
//
//
//输入：s = "cbbd"
//输出："bb"
//
//
//
//
// 提示：
//
//
// 1 <= s.length <= 1000
// s 仅由数字和英文字母组成
//
// Related Topics 字符串 动态规划 👍 4712 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length <= 1) return s
    let len = s.length, max = 0, start = 0;

    for (let i = 0; i < len; i++){
        let oddLen = isPalindrome(s, i, i)
        let evenLen = isPalindrome(s, i, i + 1)

        let curMax = Math.max(oddLen, evenLen)
        if (curMax > max){
            max = curMax
            // 回文串开始的位置应该是i往回走max的一半
            start = i - Math.floor((max - 1) / 2)
        }
    }

    return s.substring(start, start + max)
};

// 从指定位置向两边扩散，
function isPalindrome(s, i, j){
    let len = s.length;
    while (i >= 0 && j <= len - 1){
        // 退出的条件是其中一个指针到达边界或者左右指针字符不相等
        if (s[i] !== s[j]){
            break;
        }
        i--
        j++
    }
    //       9
    // e aaaacbbbb g
    // i           j
    // 0           10
    // 所以长度应该是 j - i - 1 => 10 - 0 - 1 = 9
    return j - i - 1
}
//leetcode submit region end(Prohibit modification and deletion)
