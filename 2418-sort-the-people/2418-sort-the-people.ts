    function sortPeople(names: string[], heights: number[]): string[] {
        let res = []

        let mapping = {}

        for(let i=0; i<heights.length; i++){
            let h = heights[i]
            let n = names[i]
            mapping[h] = n

        }    

        heights.sort((a,b)=>b-a)

        console.log(heights,mapping)

        for(let el of heights){
            res.push(mapping[el])
        }

        return res
    };