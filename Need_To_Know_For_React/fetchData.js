const fetchData = async () =>{
    const datas = await fetch("https://jsonplaceholder.typicode.com/users	")
    const alldatas = await datas.json()
    console.log(alldatas)
}
fetchData()