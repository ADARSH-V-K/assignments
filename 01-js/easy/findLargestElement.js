/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    for(let i=1;i<numbers.length;i++){
        if(numbers[0]<numbers[i]){
            temp=numbers[0]
            numbers[0]=numbers[i]
            numbers[i]=temp
        }
    }
    console.log('largest element is'+numbers[0])
}
module.exports = findLargestElement;
