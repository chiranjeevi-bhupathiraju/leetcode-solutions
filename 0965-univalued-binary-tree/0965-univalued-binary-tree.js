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
 * @return {boolean}
 */
var isUnivalTree = function (root) {
    let uniValue = root.val
    function dfs(n) {
        if (!n) return true

        if (n.val != uniValue) {
            return false
        }



        return dfs(n.left) &&
            dfs(n.right)
    }

    return dfs(root)
};