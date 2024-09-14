// Get File Extension 

function getFileExtension(filename) {
    return filename.split('.').pop();
}

console.log(getFileExtension("Files/example.txt"));