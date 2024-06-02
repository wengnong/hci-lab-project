
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const confirmpass = document.getElementById('confirmpass');
    const termandserv = document.getElementById('termandserv');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = validateInputs();
        if(isValid){
            alert('Login Successful');
            form.reset();
            clearState();
        }
    });

    function validateInputs(){
        let isValid = true;

        if(username.value.trim() === ''){
            setError(username, 'Username is required.');
            isValid = false;
        }
        else{
            setSuccess(username);
        }

        if(email.value.trim() === ''){
            setError(email, 'Email is required.');
            isValid = false;
        }
        else if(!isValidEmail(email.value.trim())){
            setError(email, 'Email is required.');
            isValid = false;
        }
        else{
            setSuccess(email);
        }

        if(phone.value.trim() === ''){
            setError(phone, 'Phone number is required.');
            isValid = false;
        }
        else if(!isValidPhone(phone.value.trim())){
            setError(phone, 'Phone number is required.');
            isValid = false;
        }
        else{
            setSuccess(phone);
        }

        if(password.value.trim() === ''){
            setError(password, 'Password is required.');
            isValid = false;
        }
        else{
            setSuccess(password);
        }

        if(confirmpass.value.trim() === ''){
            setError(confirmpass, 'Confirm password is required.');
            isValid = false;
        }
        else if(password.value.trim() !== confirmpass.value.trim()){
            setError(confirmpass, 'Password do not match');
            isValid = false;
        }
        else{
            setSuccess(confirmpass);
        }

        if(!termandserv.checked){
            setError(termandserv, 'You must agree to the terms and services');
            isValid = false;
        }
        else{
            setSuccess(termandserv);
        }

        return isValid;
    }

    function setError(input, message){
        const field = input.parentElement.parentElement;
        const errorDiv = field.querySelector('.error');
        errorDiv.innerText = message;
    }

    function setSuccess(input){
        const field = input.parentElement.parentElement;
        const errorDiv = field.querySelector('.error');
        errorDiv.innerText = '';
    }

    function isValidEmail(email){
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }

    function isValidPhone(phone){
        const re = /^\d{12}$/;
        return re.test(phone);
    }

    function clearState(){
        const allInput = [username, email, phone, password, confirmpass, termandserv];
        allInput.forEach(input => {
            const field = input.parentElement.parentElement;
            const errorDiv = field.querySelector('.error');
            errorDiv.innerText = '';
        });
    }
});