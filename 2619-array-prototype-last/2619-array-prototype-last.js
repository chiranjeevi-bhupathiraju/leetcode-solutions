/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
    let e = this.at(-1)
    return (e !== undefined) ? e : -1
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
