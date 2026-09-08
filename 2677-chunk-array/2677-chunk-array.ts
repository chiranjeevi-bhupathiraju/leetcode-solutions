type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(a: Obj[], chunkSize: number): Obj[][] {
    let res = []

    for (let i = 0; i < a.length; i += chunkSize) {
        let sa = a.slice(i, i + chunkSize)
        res.push(sa)
    }

    return res
};
