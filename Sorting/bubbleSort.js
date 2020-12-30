
let bubbleSort = (inputArray) =>{
    let len = inputArray.length;
    let swapped;
    do {
        swapped = false;
        for(let i =0; i< len; i++){
            if(inputArray[i] > inputArray[i + 1]){
                let tmp = inputArray[i];
                inputArray[i] = inputArray[i +1];
                inputArray[i +1] = tmp;
                swapped = true;
            }
        }
    } while(swapped);
    return inputArray;
}
const numbers = [8, 5, 6, 9, 3, 1, 4, 2, 7, 10]
bubbleSort(numbers)
console.log(numbers);
