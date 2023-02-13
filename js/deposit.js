//adding event handler/ listener on deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    //get the value of deposit input field
    const depositFieldInput = document.getElementById('deposit-field').value
    
    
    
    if(isNaN(depositFieldInput) || depositFieldInput == ''){
        alert('Please provide a valid number');
        return;
    }
    const newDeposit = parseFloat(depositFieldInput)
//current deposit total ammount
    const depositTotalDisplay = document.getElementById('deposit-total')
    const oldDeposit = parseFloat(depositTotalDisplay.innerText);
    const currentDeposit = oldDeposit + newDeposit ;
    depositTotalDisplay.innerText = currentDeposit
   
    //balance card

    const balanceTotalDisplay = document.getElementById('balance-total');
    const oldBalance = parseFloat(balanceTotalDisplay.innerText)
    balanceTotalDisplay.innerText = oldBalance + newDeposit ;

      //step 7 clear field
      document.getElementById('deposit-field').value = '';
})