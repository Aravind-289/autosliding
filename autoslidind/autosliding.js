let img1=document.getElementById("img1")
let backward=document.getElementById("back")
let forward=document.getElementById("forward")



let images=["./Shiva Ji Maharaj.jpeg",
    "Lord Shiva Hd image .jpeg",
    "./angry hanuman.jpeg"]
let index=0

function carosel(){
    index++
    if(index>=images.length){
        index=0
    }
    img1.src=images[index]

}
setInterval(carosel,2000)

forward.addEventListener("click",()=>{
    index++
    img1.src=images[index]
    if (index>=images.length){
        index=0
    }
    img1.src=images[index]
})
backward.addEventListener("click",()=>{
    index--
    img1.src=images[index]
    if(index<0){
        index=images.length-1
    }
    img1.src=images[index]
})