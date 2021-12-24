const mostUsed = (str) => { 
    let freq = {};
    let max = 0, charMax = '';
    for (let character of str)
        freq[character] = freq[character] + 1 || 1;
    for (let character of str){
        if(freq[character] > max){
            charMax = character;
            max = freq[character];
        }
    }
    return charMax;
 }

console.log(mostUsed('baaabcccc'));