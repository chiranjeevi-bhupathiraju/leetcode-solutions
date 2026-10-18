function rearrangeString(s: string, x: string, y: string): string {
    let xC = s.split('').filter((ch) => ch == x).join('')
    let yC = s.split('').filter((ch) => ch == y).join('')
    let notXYC = s.split('').filter((ch) => ch != x && ch != y).join('')

    return notXYC.concat(yC, xC)
};