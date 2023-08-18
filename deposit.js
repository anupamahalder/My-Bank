//Step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    //Step-2: get the deposit amount from the deposit input field
    //for input field use .value to get the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    if(newDepositAmount < 0){
        alert("Deposited amount cannot be negative number!");
        depositField.value='';
        return;
    }

    //Step-3: get the current deposit total
    //for non-input (element other than input,textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-display');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //Step-4: add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    if(isNaN(currentDepositTotal)){
        alert("Please enter valid amount!");
        depositField.value ='';
        return;
    }

    //set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    //Step-5: get balance current total
    const balanceTotalElement = document.getElementById('balance-display');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //Step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

    //set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    //Step-7: clear the deposit field
    depositField.value='';
})