const btnCalculate = document.querySelector('.btn-calculate')
var box2s = document.querySelectorAll('.box2')

let amount = document.getElementById('amount')
let years = document.getElementById('years')
let rate = document.getElementById('rate')




btnCalculate.addEventListener('click', () => {
  if(!checkError()){
    return ;
  }
  calculatResulte(amount.value, years.value, rate.value)


  box2s.forEach(box => {
      box.classList.toggle('notActive')
  })
  setTimeout(() => {window.location.reload()}, 2000)

})

function calculatResulte (a, b, c) {
  var resulte = (a * b) / c
  document.querySelector('.resulte-monthly').innerHTML = `$${resulte.toFixed(
    2
  )}`
  document.querySelector('.resulte-total').innerHTML = `$${
    resulte.toFixed(2) * 3
  }`
}


function checkError(){
  var inputs = document.querySelectorAll(`input[type="text"]`) ;
  inputs.forEach((input)=>{
    if(input.value === ""){
      input.classList.add("error") ;
      input.previousElementSibling.classList.add("error") ;
      var parent = input.parentElement ;
      parent.nextElementSibling.classList.add("active") ;
      return false;
    }else{
      input.classList.remove("error") ;
      input.previousElementSibling.classList.remove("error") ;
      var parent = input.parentElement ;
      parent.nextElementSibling.classList.remove("active") ;
    }
  })
}





