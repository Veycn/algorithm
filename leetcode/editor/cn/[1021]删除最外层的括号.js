//有效括号字符串为空 ""、"(" + A + ")" 或 A + B ，其中 A 和 B 都是有效的括号字符串，+ 代表字符串的连接。
//
//
// 例如，""，"()"，"(())()" 和 "(()(()))" 都是有效的括号字符串。
//
//
// 如果有效字符串 s 非空，且不存在将其拆分为 s = A + B 的方法，我们称其为原语（primitive），其中 A 和 B 都是非空有效括号字符串。
//
//
// 给出一个非空有效字符串 s，考虑将其进行原语化分解，使得：s = P_1 + P_2 + ... + P_k，其中 P_i 是有效括号字符串原语。
//
// 对 s 进行原语化分解，删除分解中每个原语字符串的最外层括号，返回 s 。
//
//
//
// 示例 1：
//
//
//输入：s = "(()())(())"
//输出："()()()"
//解释：
//输入字符串为 "(()())(())"，原语化分解得到 "(()())" + "(())"，
//删除每个部分中的最外层括号后得到 "()()" + "()" = "()()()"。
//
// 示例 2：
//
//
//输入：s = "(()())(())(()(()))"
//输出："()()()()(())"
//解释：
//输入字符串为 "(()())(())(()(()))"，原语化分解得到 "(()())" + "(())" + "(()(()))"，
//删除每个部分中的最外层括号后得到 "()()" + "()" + "()(())" = "()()()()(())"。
//
//
// 示例 3：
//
//
//输入：s = "()()"
//输出：""
//解释：
//输入字符串为 "()()"，原语化分解得到 "()" + "()"，
//删除每个部分中的最外层括号后得到 "" + "" = ""。
//
//
//
//
// 提示：
//
//
// 1 <= s.length <= 10⁵
// s[i] 为 '(' 或 ')'
// s 是一个有效括号字符串
//
// Related Topics 栈 字符串 👍 189 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * 暴力解法
 * 1、计数器记录左右括号出现的次数
 * 2、当计数器相等的时候，说明一个原语结束
 * 3、截取这个原语字符串（重复2、3，直到字符串遍历完成）放入一个数组中
 * 4、将原语数组遍历截取除了最外层括号的内容拼接字符串返会
 * @param {string} s
 * @return {string}
 */

// var removeOuterParentheses1 = function (s) {
//     var strArr = [], result = ''
//     var left = 0, right = 0, lastOpr = 0;
//     for (var i = 0; i < s.length; i++) {
//         if (s[i] === '(') {
//             left++
//         } else if (s[i] === ')') {
//             right++
//         }
//         if (left === right) {
//             strArr.push(s.substring(lastOpr, i + 1))
//             lastOpr = i + 1
//         }
//     }
//
//     for (var j = 0; j < strArr.length; j++) {
//         result += strArr[j].substring(1, strArr[j].length - 1)
//     }
//     return result
// };

/**
 * 略微优化的暴力解法
 * 在一个原语结束的时候直接截取去掉外层括号的内容，拼接字符串返回
 */
// var removeOuterParentheses2 = function (s) {
//     var left = 0, right = 0, lastOpr = 0, result = '';
//     for (var i = 0; i < s.length; i++) {
//         if (s[i] === '(') {
//             left++
//         } else if (s[i] === ')') {
//             right++
//         }
//         if (left === right) {
//             result += s.substring(++lastOpr, i)
//             lastOpr = i + 1
//         }
//     }
//     return result
// }

/**
 * 再优化的暴力解法
 * 可以只用一个计数器
 * 当遇到左括号的时候自增，右括号自减，为 0 时原语结束
 */
var removeOuterParentheses3 = function (s) {
    var count = 0, lastOpr = 0, result = '';
    for (var i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            count++
        } else if (s[i] === ')') {
            count--
        }
        if (count === 0) {
            result += s.substring(++lastOpr, i)
            lastOpr = i + 1
        }
    }
    return result
}

/**
 * 栈解法
 * @param s
 */
var removeOuterParentheses = function (s) {
    var  result = '', count = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            if (count > 0){
                result += s[i]
            }
            // stack.push(s[i])
            count++
        } else {
            // stack.pop()
            count--
            if (count > 0){
                result += s[i]
            }
        }

    }
    return result
}


console.log(removeOuterParentheses('()(()())(())'))
//leetcode submit region end(Prohibit modification and deletion)
