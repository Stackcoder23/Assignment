const longest = (arr) => {
    return arr.sort((a,b) => {return b.length- a.length})[0]
}
let arr = ['hello', 'my', 'name', 'is', 'Mandar', 'Joshi'];
console.log(longest(arr));