import { bubblingSort, selectSort, quickSort } from "./sort.js"

let arr = new Array(30).fill(0).map(() => Math.ceil(Math.random() * 100))


console.log('冒泡排序', bubblingSort(arr).toString())
console.log('选择排序', selectSort(arr).toString())
console.log('插入排序', selectSort(arr).toString())
console.log('快速排序', quickSort(arr).toString())