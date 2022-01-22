//给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
//
//
//
// 示例 1:
//
//
//输入: s = "abcabcbb"
//输出: 3
//解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
//
//
// 示例 2:
//
//
//输入: s = "bbbbb"
//输出: 1
//解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
//
//
// 示例 3:
//
//
//输入: s = "pwwkew"
//输出: 3
//解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
//
//
// 示例 4:
//
//
//输入: s = ""
//输出: 0
//
//
//
//
// 提示：
//
//
// 0 <= s.length <= 5 * 10⁴
// s 由英文字母、数字、符号和空格组成
//
// Related Topics 哈希表 字符串 滑动窗口 👍 6792 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//     // abcsadbc
//     var res = 0, left = 0, right = 0, len = s.length;
//     if (len === 0) {
//         return 0
//     }
//     var obj = {}
//     while (right < len) {
//         var char = s[right];
//         if (obj[char] !== undefined) {
//             var start = obj[char] + 1
//             left = left >= start ? left : start
//         }
//         obj[char] = right
//         var size = right - left + 1
//         res = res > size ? res : size
//         right++
//     }
//     return res
// };

var lengthOfLongestSubstring = function (s) {
    let left = 0, right = 0;
    let maxWindowLength = 0;
    let set = new Set(), len = s.length;
    // right 指针到了末端就可以结束了
    while (right < len) {
        // 当 right 指针指向的字符在 set 中重复了
        // 需要缩小当前窗口的左边界
        // 同时将这个字符从 set 中移除（这个字符还可能在后面的字串中出现）
        if (set.has(s[right])) {
            set.delete(s[left])
            left++
        }else{
            // right 指针指向的字符在 set 中不存在
            // 将字符放入 set 中， 此时字串长度更新
            set.add(s[right])
            right++
            maxWindowLength = Math.max(maxWindowLength, right - left)
        }
    }
    return maxWindowLength
};

console.log(lengthOfLongestSubstring('pwwkew'))
//leetcode submit region end(Prohibit modification and deletion)
