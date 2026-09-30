function pivotInteger(n: number): number {
    let a = Array(n).fill(0).map((a,i)=>i+1)

 

    for (let i = 0; i < a.length; i++) {
        let a1 = a.slice(0, i + 1).reduce((a, c) => a + c, 0)
        let a2 = a.slice(i).reduce((a, c) => a + c, 0)

        if (a1 == a2) {
            return i + 1
        }
    }

    return -1
};