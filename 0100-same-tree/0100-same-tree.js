/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
let cl = console.log
var isSameTree = function (p, q) {
    function dfs(n, res,) {
        if (!n) {
            res.push(',')
            return
        }

        res.push(n.val)

        dfs(n.right, res)
        dfs(n.left, res)
    }
    let res1 = []
    let res2 = []
    dfs(p, res1)
    dfs(q, res2)

    cl(res1, res2)


    return res1.join('') === res2.join('')
};