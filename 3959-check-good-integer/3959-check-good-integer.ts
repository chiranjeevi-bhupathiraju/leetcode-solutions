function checkGoodInteger(n: number): boolean {
    const digitSum = String(n).split('').reduce((a,c)=> a+(+c),0)
    const squareSum = String(n).split('').reduce((a,c)=> a+(+c*+c),0)

    return squareSum-digitSum >= 50
};