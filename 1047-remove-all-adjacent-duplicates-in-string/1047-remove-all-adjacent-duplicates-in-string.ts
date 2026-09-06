function removeDuplicates(s: string): string {
    // LIFO
    let stack = []
    let top = (stack) => stack.at(-1)

    for (let e of s) {
        if (top(stack) === e) {
            stack.pop()
        } else {
            stack.push(e)
        }
    }

    return stack.join("")
};
