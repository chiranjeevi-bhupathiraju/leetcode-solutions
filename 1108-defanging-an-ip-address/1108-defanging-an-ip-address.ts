function defangIPaddr(address: string): string {
    // return address.replaceAll('.', '[.]')

    let res = ''

    for (let e of address) {
        if (e == '.') {
            res += '[.]'
        } else {
            res += e
        }
    }

    return res
};