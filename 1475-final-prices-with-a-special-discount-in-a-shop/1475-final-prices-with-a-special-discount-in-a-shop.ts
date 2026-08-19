function finalPrices(prices: number[]): number[] {
    const n = prices.length
    let res = []

    for(let i=0; i<n; i++){
        let price = prices[i]
        for (let j=i+1; j<n; j++){
            if(
                prices[j] <= prices[i]
            ){

                price = prices[i]-prices[j]
                break
            }
        }
        res.push(price)
    }

    return res
};