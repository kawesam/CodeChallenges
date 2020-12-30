
// sample input = [5,2,4,6,1,3]
function selectionSort(inputArray){
    let n = inputArray.length;
    for(let i =0;i < n;i++){
        //find smallest element in sub arrray
        let min = i;
        for (let j = i+1; j<n; j++){
            if(inputArray[j] <inputArray[min]){
                min = j;
            }
        }
        if(min != i){
            //swapping the elements
            let tmp = inputArray[i];
            inputArray[i] = inputArray[min];
            inputArray[min] = tmp
        }

    }
    return inputArray;
}

let input = [5,2,4,6,1,3];
selectionSort(input);
console.log(input);
