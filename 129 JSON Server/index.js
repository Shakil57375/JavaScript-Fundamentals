const fetchData = async () =>{
    const response = await fetch("demo.txt")
    // will get the json data by calling json function. converted to direct javascript object.
    // const data = await response.json()
    // console.log(data.name)
    // we can convert it to textData then parse it
    const textData = await response.text()
    // will get the text from textData
    // have to parse it to get the object
    const mainObject = JSON.parse(textData)
    console.log(mainObject)
} 

fetchData()