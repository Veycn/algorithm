//传送带上的包裹必须在 days 天内从一个港口运送到另一个港口。
//
// 传送带上的第 i 个包裹的重量为 weights[i]。每一天，我们都会按给出重量（weights）的顺序往传送带上装载包裹。我们装载的重量不会超过船的最
//大运载重量。
//
// 返回能在 days 天内将传送带上的所有包裹送达的船的最低运载能力。
//
//
//
// 示例 1：
//
//
//输入：weights = [1,2,3,4,5,6,7,8,9,10], days = 5
//输出：15
//解释：
//船舶最低载重 15 就能够在 5 天内送达所有包裹，如下所示：
//第 1 天：1, 2, 3, 4, 5
//第 2 天：6, 7
//第 3 天：8
//第 4 天：9
//第 5 天：10
//
//请注意，货物必须按照给定的顺序装运，因此使用载重能力为 14 的船舶并将包装分成 (2, 3, 4, 5), (1, 6, 7), (8), (9), (1
//0) 是不允许的。
//
//
// 示例 2：
//
//
//输入：weights = [3,2,2,4,1,4], days = 3
//输出：6
//解释：
//船舶最低载重 6 就能够在 3 天内送达所有包裹，如下所示：
//第 1 天：3, 2
//第 2 天：2, 4
//第 3 天：1, 4
//
//
// 示例 3：
//
//
//输入：weights = [1,2,3,1,1], days = 4
//输出：3
//解释：
//第 1 天：1
//第 2 天：2
//第 3 天：3
//第 4 天：1, 1
//
//
//
//
// 提示：
//
//
// 1 <= days <= weights.length <= 5 * 10⁴
// 1 <= weights[i] <= 500
//
// Related Topics 贪心 数组 二分查找 👍 472 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
    // 1、确定二分的上下界
    // - 下界应该是货物列表的最大值（至少应该能装走一个）
    // - 上界应该是货物列表的总和 sum(weights) 一次全部装走
    let left = 0, right = 0;
    for (let i = 0; i < weights.length; i++) {
        if (weights[i] > left) {
            left = weights[i];
        }
        right += weights[i];
    }

    // [2，3，4，5，6]中可能 345 都能满足在 days 天运载完毕，但是毕竟运载能力越小肯定越便宜嘛
    // 题目要求最小运载能力，所以找的应该是左边界
    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        let d = f(weights, mid);
        if (d > days) {
            // 超过时间了，运力不够
            left = mid + 1;
        } else if (d < days) {
            // 提前了，运力过剩
            right = mid;
        } else if (d === days) {
            // 找到了合适的值，但是不一定是最小的，所以向左侧收拢边界
            right = mid;
        }
    }
    return left
};

function f(weights, x) {
    let days = 0;
    for (let i = 0; i < weights.length;) {
        let cap = x;
        while (i < weights.length) {
            if (weights[i] > cap) {
                break;
            }
            cap -= weights[i];
            i++;
        }
        days++;
    }
    return days;
}

//leetcode submit region end(Prohibit modification and deletion)
