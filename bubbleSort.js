bubbleSort = (array) => {
  let swapped = false
  do {
    swapped = false
    array.forEach((current, i) => {
//       console.log(array.join(' '))
      if (current > array[i + 1]) {
        const temp = current
//         console.log(array.join(' '))
        console.log(temp)

        array[i] = array[i + 1]
        array[i + 1] = temp
        console.log(array[i+1]);
        swapped = true
      }
    })
  } while(swapped)
  console.log(array.join(' '))
  return array
}

const numbers = [8, 5, 6, 9, 3, 1, 4, 2, 7, 10]
bubbleSort(numbers)
