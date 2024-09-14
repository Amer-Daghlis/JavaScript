// Program to Split an Array into Smaller Chunks

function chunkArray(arr, chunkSize) {
    let result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        result.push(arr.slice(i, i + chunkSize));
    }
    return result;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let chunks = chunkArray(arr, 3);
console.log(chunks);
