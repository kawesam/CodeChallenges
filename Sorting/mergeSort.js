const numbers = [8, 5, 6, 9, 3, 1, 4, 2, 7, 10]

const merge = (array1,array2) =>{
    let sorted = [];
    while(array1.length && array2.length){
        if(array1[0] <array2[0]){
            sorted.push(array1.shift());
        }else{
            sorted.push(array2.shift());
        }
    }
    return sorted.concat(array1.slice().concat(array2.slice()));
}

const mergeSort = arr => {
    if(arr.length <=1) return arr;
    let mid = Math.floor(arr.length/2),
        left = mergeSort(arr.slice(0, mid)),
        right = mergeSort(arr.slice(mid));


        return merge(left,right);
};

console.log(mergeSort(numbers));
