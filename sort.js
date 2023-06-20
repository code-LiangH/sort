/* 
  1.冒泡排序
*/
function bubblingSort(arr) {
  let k = null
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        k = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = k
      }
    }
  }
  return arr
}

/* 
  2.选择排序
*/
function selectSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
  }
  return arr
}

/* 
  3.插入排序
*/
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentValue = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = currentValue
  }
}

/* 
  4.快速排序
*/
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  let preValue = arr[0]
  let lefArr = []
  let rightArr = []
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < preValue) {
      lefArr.push(arr[i])
    } else {
      rightArr.push(arr[i])
    }
  }
  return [...quickSort(lefArr), preValue, ...quickSort(rightArr)]
}



export {
  bubblingSort,
  selectSort,
  insertionSort,
  quickSort
}