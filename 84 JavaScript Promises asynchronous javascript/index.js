const status = true;
console.log("Task 1")
const promise = new Promise(function(resolve, reject){
    setTimeout(() => {
        if(status){
            resolve("Task 2")
        }
        else{
            reject("failed")
        }
    }, 2000);
})

promise
     .then(function(value){
        console.log(value)
     })
     .catch(function(error){
        console.log(error)
     })

console.log("task 3")