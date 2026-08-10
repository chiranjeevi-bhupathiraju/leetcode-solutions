function squareIsWhite(coordinates: string): boolean {
    let [c, r] = coordinates.split("") // a1

    let rpos = +r

    let cpos =
        c.charCodeAt(0) // 'a'=>97, 'b'=>98
        -
        'a'.charCodeAt(0) // 'a' => 97
        + 1 // 1,2,3,4

    let res = (rpos + cpos) % 2 === 0 // even, true, black
    return !res
};
