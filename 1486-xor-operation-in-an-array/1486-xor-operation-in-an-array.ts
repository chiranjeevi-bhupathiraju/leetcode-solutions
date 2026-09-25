function xorOperation(n: number, start: number): number {
    return Array
        .from({ length: n }, (_, i) => 2 * i + start)
        .reduce((xor, e) => xor ^ e, 0)
};
