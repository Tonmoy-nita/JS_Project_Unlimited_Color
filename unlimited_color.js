//generate a random color

const randomColor=function(){
    const hex="0123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++){
    color +=hex[Math.round(Math.random()*16)]
    }
    return color
}

const setColor=function(){
    document.body.style.backgroundColor=randomColor()
}
let clr
document.getElementById('start').addEventListener("click",function(){
    clr=setInterval(setColor,2000)
})
document.getElementById('stop').addEventListener("click",function(){
    clearInterval(clr)
})
