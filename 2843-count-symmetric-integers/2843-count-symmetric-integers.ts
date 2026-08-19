function countSymmetricIntegers(low: number, high: number): number {
    let i = low
    let ct =0
    while(i <= high){
        let si = String(i)
       if(si.length % 2 == 0){
        let fs = si.slice(0,si.length/2).split('').reduce((a,c)=>a+(+c),0)
        let se = si.slice(si.length/2).split('').reduce((a,c)=>a+(+c),0)

        if(fs == se){
            ct++
        }
       }
       i++
    }
    return ct
};