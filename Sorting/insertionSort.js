let insertionSort = (inputArray) =>{
    for(let i =1;i<inputArray.length;i++){
        let current = inputArray[i];  //2
        let j = i -1;  //5
        while(j >=0 && inputArray[j] > current){
            inputArray[j + 1] = inputArray[j];
            j = j -1;
        }
        inputArray[j + 1]  = current;

    }
     return inputArray;
};

let input = [5,2,4,6,1,3];
insertionSort(input);
console.log(input);
