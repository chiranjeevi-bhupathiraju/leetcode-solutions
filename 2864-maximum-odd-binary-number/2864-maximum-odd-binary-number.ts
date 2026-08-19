function maximumOddBinaryNumber(s: string): string {
   const ones = s.match(/1/g).length || 0
   const zeros = s.length-ones


    return "1".repeat(ones-1)+'0'.repeat(zeros)+"1"
};
