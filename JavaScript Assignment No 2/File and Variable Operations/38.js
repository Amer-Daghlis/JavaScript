// Check if a Variable is Undefined or Null

function checkVariable(value) {
    if (value === undefined || value === null) {
        console.log("The variable is either undefined or null");
    } else {
        console.log("The variable is defined and not null");
    }
}

let testVar;
checkVariable(testVar); 
