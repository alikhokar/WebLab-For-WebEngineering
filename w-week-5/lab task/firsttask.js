const array = [1, 2, 3, 4]
const reversedArray = []
function  reverse(array) {
    for(let i = array.length - 1; i >= 0; i--) {
        const valueAtIndex = array[i]
  
        reversedArray.push(valueAtIndex)
    }
}
reverse(array)
console.log(reversedArray)
