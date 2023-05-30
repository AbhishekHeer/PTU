console.log(" Hello My Name Is Abhishek But You Can Call Me Ashh")

/* eye open logic */

let eyesopen = document.querySelector("#eye")
let open = document.getElementById("open")
let show = document.querySelector("#inputpass")

eyesopen.addEventListener("click",()=>{
    eyesopen.style.display = "none";
    open.style.display = "flex";
    show.setAttribute("type","text")
    
  
})


open.addEventListener("click",()=>{
    eyesopen.style.display = "flex";
    open.style.display = "none";
    show.setAttribute("type","password")
})


/* dark and light */
let light = document.getElementById("light")
let dark = document.getElementById("dark")


function darkon(){
    dark.style.display = "inline"
    light.style.display = "none"
    document.body.style.background = "black";
    document.body.style.color = 
    "white"
}

function lighton(){
    dark.style.display = "none"
    light.style.display = "inline"
    document.body.style.background = "white";
    document.body.style.color = 
    "black"
}


light.addEventListener("click",darkon)

dark.addEventListener("click",lighton)