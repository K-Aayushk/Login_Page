let div=document.getElementById("box");
let box2=document.getElementById("box2");
let box1=document.getElementById("box1");
let aa=document.getElementById("aa");
let a=document.getElementById("a");
let c1=document.getElementById("c1")
let c2=document.getElementById("c2")
let c3=document.getElementById("c3")
let c4=document.getElementById("c4")
let c5=document.getElementById("c5")
let c6=document.getElementById("c6")
let c7=document.getElementById("c7")
function left(){
    div.style.left='0%'
    c1.style.background="#dc0707"
    c2.style.background="#dc0707"
    c3.style.background="#dc0707"
    c4.style.background="#dc0707"
    c5.style.background="#dc0707"
    c6.style.background="#dc0707"
    c7.style.background="#dc0707"
    div.style.background="#dc0707"
    
}
function right(){
    div.style.left='45%'
    c1.style.background="#013169"
    c2.style.background="#013169"
    c3.style.background="#013169"
    c4.style.background="#013169"
    c5.style.background="#013169"
    c6.style.background="#013169"
    c7.style.background="#013169"
    div.style.background="#013169"

}
a.addEventListener('click',()=>{
    left();    
    box1.style.display="none"
    box2.style.display="block"
});
aa.addEventListener("click",()=>{
    right();
    box2.style.display="none";
    box1.style.display="block"
})