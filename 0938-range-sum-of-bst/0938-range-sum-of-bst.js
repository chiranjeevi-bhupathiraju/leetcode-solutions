/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {

    let sum = 0

    function dfs(n) {

        if (!n) return

        if (n.val >= low && n.val <= high) {
            sum += n.val
        }

        dfs(n.left, sum)
        dfs(n.right, sum)

        return sum

    }

    dfs(root)

    return sum
};