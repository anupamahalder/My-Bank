//Step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    //Step-2: get the email address inside the email input field
    //always remember to use dot value to get text from an input field
    const emailField = document.getElementById('login-email');
    const email = emailField.value;
    //Step-3: get password
    //Step-3.a: set id on the html element
    //Step-3.b: get the element 
    //Step-3.c: get the value from the element
    const passwordField = document.getElementById('login-password');
    const password = passwordField.value;
    console.log(email,password);
    //DANGER: Do not verify email password on the client side
    //Step-4: verify email and password and check valid user or not
    if(email==='anu@gmail.com' && password==='secret'){
        console.log('Valid user');
        window.location.href = './bank.html';
    }
    else{
        alert('Invalid User');
    }
})