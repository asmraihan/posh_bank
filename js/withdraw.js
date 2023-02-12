//withdraw card
//add event handler with withdraw btn
//get the withdraw amount from input field

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawFieldInput = document.getElementById("withdraw-field").value;
  const newWithdraw = parseFloat(withdrawFieldInput);

  document.getElementById("withdraw-field").value = "";

if(isNaN(newWithdraw)){
    alert('please provide a valid number');
    return;
}

  const withdrawDisplay = document.getElementById("withdraw-total");
  const oldWithdraw = parseFloat(withdrawDisplay.innerText);


  //balance card
  const balanceTotalDisplay = document.getElementById("balance-total");
  const oldBalance = parseFloat(balanceTotalDisplay.innerText);


  if(newWithdraw > oldBalance){
    alert('Baap er bank e eto taka nai');
    return;
  }
  const currentWithdraw = newWithdraw + oldWithdraw;
  withdrawDisplay.innerText = currentWithdraw;

  balanceTotalDisplay.innerText = oldBalance - newWithdraw;

});
