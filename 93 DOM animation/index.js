function move (){
    let pos = 0
    const animate = document.getElementById("animate")
    const interval = setInterval(fame, 5)
    function fame(){
        if(pos < 350){
            pos++
            animate.style.top = pos + "px"
            animate.style.left = pos + "px"
        }else{
            clearInterval(interval)
            animate.style.top = "0px"
            animate.style.left = "0px"
        }
    }
}