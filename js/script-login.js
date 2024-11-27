function validateAll(){
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const confirmpass = document.getElementById('confirmpass');
    const termandserv = document.getElementById('termandserv');
    const form = document.getElementById('form');

    clearError(username);
    clearError(email);
    clearError(phone);
    clearError(password);
    clearError(confirmpass);
    clearError(termandserv);

    if(username.value.trim() === ''){
        setError(username, 'Username is required');
    }
    else if(email.value.trim() === ''){
        setError(email, 'Email is required');
    }
    else if(!email.value.endsWith("@gmail.com")){
        setError(email, 'Email must end with @gmail.com');
    }
    else if(phone.value.trim() === ''){
        setError(phone, 'Phone number is required');
    }
    else if(!phone.value.startsWith("0")){
        setError(phone, 'Phone number must start with 0');
    }
    else if(password.value.trim() === ''){
        setError(password, 'Password is required');
    }
    else if(confirmpass.value.trim() === ''){
        setError(confirmpass, 'Confirm password is required');
    }
    else if(password.value.trim() !== confirmpass.value.trim()){
        setError(confirmpass, 'Passwords do not match');
    }
    else if(!termandserv.checked){
        setError(termandserv, 'You must agree to the terms and services');
    }
    else{
        alert('Login Successful');
        form.submit();
        clearState();
    }

    function setError(input, message){
        const field = input.parentElement.parentElement;
        const errorDiv = field.querySelector('.error');
        errorDiv.innerText = message;
    }

    function clearError(input){
        const field = input.parentElement.parentElement;
        const errorDiv = field.querySelector('.error');
        errorDiv.innerText = '';
    }

    function clearState(){
        username.value = '';
        email.value = '';
        phone.value = '';
        password.value = '';
        confirmpass.value = '';
        termandserv.checked = false;
    }

    document.getElementById('form').addEventListener('input', function(event){
        const input = event.target;
        clearError(input);
    });
}