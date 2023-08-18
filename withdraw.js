/*  Step-1: add event handler with the withdraw button
    Step-2: get the withdraw amount from the withdraw input field
    Step-2.1: also make sure to convert the input into a number by using parseFloat()
    Step3: get previous withdraw amount
    Step-4: calculate total withdrawal amount
    Step-4.1: set total withdrawal amount
    Step-5: get the previous balance total
    Step-6: calculate new balance total
    Step-6.1: set the new balance total
    Step-7: clear the input field
*/
//Step-1
document.getElementById('btn-withdraw').addEventListener('click',function(){
    //Step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    //Step3
    const WithdrawTotalElement = document.getElementById('withdraw-display');
    const previousWithdrawTotalString = WithdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    //Step4
    const currentWithdrawalTotal = previousWithdrawTotal + newWithdrawAmount;
    //Step4.1
    WithdrawTotalElement.innerText = currentWithdrawalTotal;
    //Step-5
    const balanceTotalElement = document.getElementById('balance-display');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    //Step-6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    //Step-6.1
    balanceTotalElement.innerText = newBalanceTotal;
    //Step-7
    withdrawField.value = '';
})