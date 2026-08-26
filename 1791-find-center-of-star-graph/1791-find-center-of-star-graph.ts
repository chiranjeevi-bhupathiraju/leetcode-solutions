function findCenter(edges: number[][]): number {
    let n = edges.length + 1
    let degree = new Array(n + 1).fill(0)

    for (let [u, v] of edges) {
        degree[u]++
        degree[v]++
    }

    for (let u = 1; u <= n; u++) {
        if (degree[u] > 1) {
            return u
        }
    }
};
