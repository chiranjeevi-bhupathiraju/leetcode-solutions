function isValid(s: string): boolean {
    let stack = []
    let top = (stack) => stack.at(-1)
    let openBracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for (let e of s) {
        if (stack.length &&
            top(stack) === openBracketMap[e]
        ) {
            stack.pop()
        } else {
            stack.push(e)
        }
    }

    return stack.length === 0
};
