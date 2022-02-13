//给你一个字符串 text，你需要使用 text 中的字母来拼凑尽可能多的单词 "balloon"（气球）。
//
// 字符串 text 中的每个字母最多只能被使用一次。请你返回最多可以拼凑出多少个单词 "balloon"。
//
//
//
// 示例 1：
//
//
//
// 输入：text = "nlaebolko"
//输出：1
//
//
// 示例 2：
//
//
//
// 输入：text = "loonbalxballpoon"
//输出：2
//
//
// 示例 3：
//
// 输入：text = "leetcode"
//输出：0
//
//
//
//
// 提示：
//
//
// 1 <= text.length <= 10^4
// text 全部由小写英文字母组成
//
// Related Topics 哈希表 字符串 计数 👍 96 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * balloon => balon
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    if (!text.length) return 0;
    const arr = new Array(5).fill(0)
    for (const char of text){
        switch (char){
            case 'b':
                arr[0]++;
                break;
            case 'a':
                arr[1]++;
                break;
            case 'l':
                arr[2]++;
                break;
            case 'o':
                arr[3]++;
                break;
            case 'n':
                arr[4]++;
                break;
        }
    }
    arr[2] = Math.floor(arr[2] / 2)
    arr[3] = Math.floor(arr[3] / 2)
    return Math.min(...arr)
};
//leetcode submit region end(Prohibit modification and deletion)
