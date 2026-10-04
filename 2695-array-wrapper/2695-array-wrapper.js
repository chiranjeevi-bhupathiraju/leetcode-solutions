class ArrayWrapper {
    constructor(a) {
        this.a = a
    }

    valueOf() {
        return this.a.reduce((s, e) => s + e, 0)
    }

    toString() {
        return '[' + this.a.join(",") + ']'
    }
};


// ------------

var ArrayWrapper2 = function (a) {
    this.a = a
};

ArrayWrapper2.prototype.valueOf = function () {
    return this.a.reduce((s, e) => s + e, 0)
}

ArrayWrapper2.prototype.toString = function () {
    return '[' + this.a.join(",") + ']'
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */