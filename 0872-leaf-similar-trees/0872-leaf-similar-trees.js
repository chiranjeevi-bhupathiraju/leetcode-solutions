/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    function dfs(n, res,) {
        if (!n) {

            return
        }

        if (!n.left && !n.right) {
            res.push(n.val)

        }

        dfs(n.right, res)
        dfs(n.left, res)
    }
    let res1 = []
    let res2 = []
    dfs(root1, res1)
    dfs(root2, res2)


    return res1.join(',') === res2.join(',')
};