function calculateAverage(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
        sum += array[i]
    }
    const average = sum / array.length
    return average;
}

const findAverage = (numbers) =>{
    return numbers.reduce((a,b)=> (a + b)) / numbers.length
}

const array = [2,2,5,7];
const average = findAverage(array);
console.log(average);
  