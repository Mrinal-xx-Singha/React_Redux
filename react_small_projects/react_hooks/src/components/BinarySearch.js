// function binarySearch(arr, target) {
//   let leftIndex = 0;
//   let rightIndex = arr.length - 1;

//   while (leftIndex <= rightIndex) {
//     let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
//     if (target === arr[middleIndex]) return middleIndex;
//     if (target < arr[middleIndex]) {
//       rightIndex = middleIndex - 1;
//     } else {
//       leftIndex = middleIndex + 1;
//     }
//   }
//   return -1
// }

// console.log(binarySearch([-5, 2, 4, 6, 10], 10));
// console.log(binarySearch([-5, 2, 4, 6, 10], 6));
// console.log(binarySearch([-5, 2, 4, 6, 10], 20));

// const arr = [1,2,3,4,5]
// function Print(arr) {
//     for(let i=0;i<arr.length;i++){
//        let ans= arr[i] * 2
//         console.log(ans)
//     }
//     return
    
// }
// console.log(Print(arr));

function toCelsius (fahrenheit){
    return (5/9) *(fahrenheit -32)
}
let value = toCelsius(10)
console.log(value)