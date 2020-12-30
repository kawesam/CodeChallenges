arrayFilter = function(n){
    let newArray = [];
    let numArray = [5,5,11,1,1,1,6,6,6,104, 99];

// ES2015
    numArray = numArray.sort((a, b) => a - b);

    console.log(numArray);
    for (let i = 0;i<=numArray.length-1;i++){
        if(numArray[i] ===numArray[i+1] && numArray[i+1] ===numArray[i]){
            numArray.splice(i, 1);

        }else{
            newArray.push(numArray[i]);
        }
    }
    return newArray;
}

console.log(arrayFilter());

// console.log();
