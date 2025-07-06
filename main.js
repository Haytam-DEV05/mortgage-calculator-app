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

function calculatResulte(principal, years, rate) {
  let monthlyRate = (rate / 100) / 12;
  let n = years * 12;
  let monthlyPayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));
  let totalPayment = monthlyPayment * n;

  document.querySelector('.resulte-monthly').innerHTML = `$${monthlyPayment.toFixed(2)}`
  document.querySelector('.resulte-total').innerHTML = `$${totalPayment.toFixed(2)}`
}

function checkError(){
  let isValid = true;
  var inputs = document.querySelectorAll(`input[type="text"]`) ;
  inputs.forEach((input)=>{
    if(input.value.trim() === ""){
      input.classList.add("error") ;
      input.previousElementSibling.classList.add("error") ;
      var parent = input.parentElement ;
      parent.nextElementSibling.classList.add("active") ;
      isValid = false;
    }else{
      input.classList.remove("error") ;
      input.previousElementSibling.classList.remove("error") ;
      var parent = input.parentElement ;
      parent.nextElementSibling.classList.remove("active") ;
    }
  })
  return isValid;
}






