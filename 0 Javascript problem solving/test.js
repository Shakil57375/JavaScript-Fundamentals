const fun1 = () =>{
    let variable = "this is the called function"
    const fun2 = () =>{
        console.log(variable)
    }
    return fun2
}

const calledFunc = fun1()
calledFunc()