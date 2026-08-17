function convertDateToBinary(date: string): string {
    return date.split('-').map(e=>(+e).toString(2)).join('-')
};