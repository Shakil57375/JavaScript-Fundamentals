function calculateAverage(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
        sum += array[i]
    }
    const average = sum / array.length
    return average;
}

const array = [2,2,5,7];
const average = calculateAverage(array);
console.log(average);
  