// input : linearSearch(["a","n","d","e","h"], "z")
// output : 2 or "not found!"
// problem: linearSearch() function টি implement করে দেখান।

const linearSearch = (arr, val) =>{
    // console.log(arr)
    // console.log(val)
    const length = arr.length
   for(let i = 0; i < length; i++){
    if(arr[i] === val){
        return i
    }
   }
   return "not found"
}
            
console.log(linearSearch(["a","n","d","e","h"], "e"))