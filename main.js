
const btnCalculate = document.querySelector(".btn-calculate") ;
var box2s = document.querySelectorAll(".box2") ;


let amount = document.getElementById("amount") ;
let years = document.getElementById("years") ;
let rate = document.getElementById("rate") ;

btnCalculate.addEventListener("click",()=>{
    box2s.forEach((box)=>{
        box.classList.toggle("notActive") ;
    })
    calculatResulte(amount.value,years.value,rate.value)
    setTimeout(()=>{window.location.reload()},2000)
})
    
function calculatResulte(a,b,c){
    var resulte = (a * b) / c ;
    document.querySelector(".resulte-monthly").innerHTML = `$${resulte.toFixed(2)}` ;
    document.querySelector(".resulte-total").innerHTML = `$${resulte.toFixed(2) * 3}` ;
}