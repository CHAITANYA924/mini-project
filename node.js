let data=[
    [
        "React is extremely popular",
        "It makes building complex, interactive UIs a breeze",
        "It's powerful $ flexible",
        "It has a very active and vesatile ecosystem"
    ],
    [
        "Componends, JSX $Proos",
        "State",
        "Hooks (e.g., useEffect())",
        "Dynamic rendering"
    ],
    [
        "Official web page (react.dev)",
        " Next.js (Fullstack framework)",
        "React Native (bulid native mobile apps with React)"
    ],
]


let why = document.querySelector(".why");
let corn = document.querySelector(".corn");
let related = document.querySelector(".related");
let textArea = document.querySelector(".textArea");
let ul = document.querySelector(".unorederList");
let btn = document.querySelectorAll(".btn");


why.addEventListener("click",()=>{
    removeClassList()
    textArea.classList.remove("area");
    why.classList.add("active");
    ul.innerHTML="";
    data[0].forEach((item)=>{
        let li = document.createElement("li");
        li.innerHTML = `${item}`
      ul.append(li) 
    })
  
})
corn.addEventListener("click",()=>{
    removeClassList();
    textArea.classList.remove("area");
    corn.classList.add("active");
   
    ul.innerHTML="";
    data[1].forEach((item)=>{
        let li = document.createElement("li");
        
        li.innerHTML = `${item}`
      ul.append(li) 
    
    })
})
related.addEventListener("click",()=>{
    removeClassList()
    textArea.classList.remove("area");
    related.classList.add("active")
    
    ul.innerHTML="";
    data[2].forEach((item)=>{
        let li = document.createElement("li");
        li.innerHTML = `${item}`
      ul.append(li) 
    })
})


let removeClassList =()=>{
    btn.forEach((item)=>{
        item.classList.remove("active")
    })
}
