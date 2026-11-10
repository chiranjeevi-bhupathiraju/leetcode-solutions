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

let cl = console.log
var isSymmetric = function (root) {
    function dfs(n, res, traversal) {
        if (!n) {
            res.push(',')
            return
        }

        res.push(n.val)

        if (traversal) {
            dfs(n.left, res, traversal)

        }

        dfs(n.right, res, traversal)

        if (!traversal) {
            dfs(n.left, res, traversal)

        }
    }
    let res1 = []
    let res2 = []
    dfs(root.left, res1, true)
    dfs(root.right, res2, false)
    cl(res1, res2)


    return res1.join('') === res2.join('')
};