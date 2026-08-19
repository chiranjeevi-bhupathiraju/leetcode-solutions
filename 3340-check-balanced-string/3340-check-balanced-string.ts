function isBalanced(num: string): boolean {
    let evenSum = num.split('').reduce((a,c,i)=> i%2 === 0 ? a+(+c):a,0)
     let oddSum = num.split('').reduce((a,c,i)=>i%2 !== 0 ? a+(+c):a ,0)

     return evenSum == oddSum
};