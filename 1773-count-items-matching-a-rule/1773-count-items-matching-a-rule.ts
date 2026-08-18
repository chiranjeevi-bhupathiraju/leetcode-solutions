function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
    return items.map((item)=>({
        'type': item[0],
        'color':item[1],
        'name':item[2]
    })).filter(item=>item[ruleKey] === ruleValue).length
};