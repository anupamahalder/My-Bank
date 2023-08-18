/*
    using function we can replace deposit.js and withdraw.js
    
 */
function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value; 
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}
function getTextElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}
function setTextElementValueById(elementId,newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

//For deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    //Step-1
    //1. get the element by id
    //2. get the value from the element
    //3. convert string value to a number
    const newDepositAmount = getInputValueById('deposit-field');
    //Step-2
    //1. get previous deposit total by id
    const previousDepositTotal = getTextElementValueById('deposit-display');
    //Step-3
    //1. calculate new deposit total
    const currentDepositTotal = previousDepositTotal+newDepositAmount;
    //step-4
    //1. set the deposit total value
    setTextElementValueById('deposit-display',currentDepositTotal);
    //Step-5
    //1. get previous balance by using the function
    const previousBalanceTotal = getTextElementValueById('balance-display');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    //2. set the balance
    setTextElementValueById('balance-display',newBalanceTotal);
})
//For withdrawal button
document.getElementById('btn-withdraw').addEventListener('click',function(){
    //Step-1
    //1. get the element by id
    //2. get the value from the element
    //3. convert string value to a number
    const newWithdrawAmount = getInputValueById('withdraw-field');
    //Step-2
    //1. get previous Withdraw total by id
    const previousWithdrawTotal = getTextElementValueById('withdraw-display');
    //Step-3
    //1. calculate new deposit total
    const currentWithdrawTotal = previousWithdrawTotal+newWithdrawAmount;
    //step-4
    //1. set the deposit total value
    setTextElementValueById('withdraw-display',currentWithdrawTotal);
    //Step-5
    //1. get previous balance by using the function
    const previousBalanceTotal = getTextElementValueById('balance-display');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    //2. set the balance
    setTextElementValueById('balance-display',newBalanceTotal);
})