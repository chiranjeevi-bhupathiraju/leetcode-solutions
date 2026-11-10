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
 * @return {number[]}
 */
 let cl = console.log
var averageOfLevels = function (root) {
    let sums = []
    let counts = []
    function dfs(n, level) {
        if (!n) return

        sums[level] = sums[level] || 0
        sums[level] += n.val

        counts[level] = counts[level] || 0
        counts[level] += 1


        dfs(n.left, level + 1)
        dfs(n.right, level + 1)

    }



    dfs(root, 0)
    let res = []

    cl(sums,counts)

    for (let i = 0; i < counts.length; i++) {
        res[i] = sums[i] / counts[i]
    }


    return res
};