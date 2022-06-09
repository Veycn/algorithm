//给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
//
// 注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。
//
//
//
// 示例 1:
//
//
//输入: num1 = "2", num2 = "3"
//输出: "6"
//
// 示例 2:
//
//
//输入: num1 = "123", num2 = "456"
//输出: "56088"
//
//
//
// 提示：
//
//
// 1 <= num1.length, num2.length <= 200
// num1 和 num2 只能由数字组成。
// num1 和 num2 都不包含任何前导零，除了数字0本身。
//
// Related Topics 数学 字符串 模拟 👍 850 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let result = 0;
    for(let i = 0; i < num2.length; i++){
        result += multiplyOne(num1, parseInt(num2[i])) * Math.pow(10, i)
    }
    return result + '';
};


function multiplyOne(num1, num2){
    let result = 0, len = num1.length;
    for(let i = 0; i < len; i++){
        let res = parseInt(num1[i]) * num2;
        result += res * Math.pow(10, len - i - 1);
    }
    return result
}

multiply('123', '2')
//leetcode submit region end(Prohibit modification and deletion)
