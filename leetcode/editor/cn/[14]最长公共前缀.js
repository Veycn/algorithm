//编写一个函数来查找字符串数组中的最长公共前缀。
//
// 如果不存在公共前缀，返回空字符串 ""。
//
//
//
// 示例 1：
//
//
//输入：strs = ["flower","flow","flight"]
//输出："fl"
//
//
// 示例 2：
//
//
//输入：strs = ["dog","racecar","car"]
//输出：""
//解释：输入不存在公共前缀。
//
//
//
// 提示：
//
//
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] 仅由小写英文字母组成
//
// Related Topics 字符串 👍 2030 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length || !strs[0]) return ''
    let res = '', len = strs[0].length
    for(let i = 0; i < len; i ++){
        let test = res + strs[0][i]
        for(let j = 0; j < strs.length; j++){
            if(!compat(test, strs[j])){
                return res
            }
        }
        res = test
    }
    return res
};

function compat(prefix, word){
    for(let i = 0; i < prefix.length; i++){
        if(word[i] !== prefix[i]){
            return false
        }
    }
    return true
}

console.log(longestCommonPrefix(['a']))
//leetcode submit region end(Prohibit modification and deletion)
