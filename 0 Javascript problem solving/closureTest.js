function outerFunction (){
    let test = "This is the inner function "

    const innerFunction = () =>{
        console.log(test)
    }
    return innerFunction
}

const closure = outerFunction()
closure()