function minimumSum(num: number): number {
  let s =  String(num).split('').sort()

    return +(s[0]+s[2]) + +(s[1]+s[3])
};