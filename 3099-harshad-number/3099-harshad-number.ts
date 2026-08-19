function sumOfTheDigitsOfHarshadNumber(x: number): number {

    let sum = String(x).split('').reduce((a,c)=>a+ (+c),0)

    if (x%sum == 0){
       return sum
    }else{
        return -1
    }

};