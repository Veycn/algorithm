//输入一个字符串，打印出该字符串中字符的所有排列。
//
//
//
// 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。
//
//
//
// 示例:
//
// 输入：s = "abc"
//输出：["abc","acb","bac","bca","cab","cba"]
//
//
//
//
// 限制：
//
// 1 <= s 的长度 <= 8
// Related Topics 字符串 回溯 👍 572 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
    const result = new Set();
    backtrack('', []);
    return [...result];

    function backtrack(current, used) {
        if (current.length === s.length) {
            result.add(current);
            return;
        }

        for (let i = 0; i < s.length; i++) {
            if (i > 0 && s[i] === s[i - 1] && used[i - 1] === false) {
                continue
            }
            if (!used[i]) {
                current += s[i];
                used[i] = true;
                backtrack(current, used);
                used[i] = false;
                current = current.slice(0, -1);
            }
        }
    }

};

console.log(permutation('suvs'))
//leetcode submit region end(Prohibit modification and deletion)
