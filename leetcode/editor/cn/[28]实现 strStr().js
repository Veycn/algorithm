//实现 strStr() 函数。
//
// 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如
//果不存在，则返回 -1 。
//
//
//
// 说明：
//
// 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
//
// 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与 C 语言的 strstr() 以及 Java 的 indexOf() 定义相符。
//
//
//
// 示例 1：
//
//
//输入：haystack = "hello", needle = "ll"
//输出：2
//
//
// 示例 2：
//
//
//输入：haystack = "aaaaa", needle = "bba"
//输出：-1
//
//
// 示例 3：
//
//
//输入：haystack = "", needle = ""
//输出：0
//
//
//
//
// 提示：
//
//
// 0 <= haystack.length, needle.length <= 5 * 10⁴
// haystack 和 needle 仅由小写英文字符组成
//
// Related Topics 双指针 字符串 字符串匹配 👍 1259 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * hello
 *   ll
 */
var _strStr = function (haystack, needle) {
    if (needle.length > haystack.length) return -1
    if (!haystack || !needle) return 0
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let j;
            for (j = 1; j < needle.length; j++) {
                if (haystack[i + j] !== needle[j]) {
                    break
                }
            }
            if (j === needle.length) {
                return i
            }
        }
    }
    return -1
};
// 解答成功:
//     执行耗时:6084 ms,击败了5.01% 的JavaScript用户
//     内存消耗:41.5 MB,击败了12.95% 的JavaScript用户


var _strStr = function (haystack, needle) {
    if (needle.length > haystack.length) return -1
    if (!haystack || !needle) return 0
    let len = needle.length, left = 0, right = len - 1;
    for (let i = 0; i < haystack.length;){
        if (haystack[i] === needle[left] && haystack[right] === needle[len - 1]){
            judge(haystack, i + 1, right - 1)
        }
    }
}

console.log(strStr('', 'a'))
//leetcode submit region end(Prohibit modification and deletion)
