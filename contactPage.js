function form_submit(event){
    event.preventDefault()

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let selectedGender = document.querySelector('input[name="gender"]:checked');
    let checkboxes = document.querySelectorAll('input[name="box"]:checked');
    let errorMessage = document.getElementById('errorMessage');
    let errorMessage2 = document.getElementById('errorMessage2');
    let errorMessage3 = document.getElementById('errorMessage3');
    let errorMessage4 = document.getElementById('errorMessage4');
    let errorMessage5 = document.getElementById('errorMessage5');

    let isvalid = true

    if(name === ''){
        errorMessage.textContent = 'Name cannot be empty';
        isvalid = false
    }
    else if(name.length < 2 || name.length > 100){
        errorMessage.textContent = 'Name must be between 2 and 100 characters';
        isvalid = false
    }
    else if(name.includes('  ')){
        errorMessage.textContent = 'Name cannot contain double spaces';
        isvalid = false
    }
    else if(name.indexOf(' ') === -1) {
        errorMessage.textContent = 'Full name must contain at least two words';
        isvalid = false
    }
    else {
        errorMessage.textContent= ''
    }
    for(let i = 0; i < name.length; i++){
        let char =name[i]
        if(!(char >= 'A' && char <= 'Z') && !(char >= 'a' && char <= 'z') && char !== ' '){
            errorMessage.textContent = 'Name can only contain letters and spaces';
            isvalid = false
        }
        else {
            errorMessage.textContent= ''
        }
    }

    if (email === '') {
        errorMessage2.textContent = 'Email cannot be empty';
        isvalid = false;
    } 
    else if (!email.includes('@')) {
        errorMessage2.textContent = 'EEmail must contain the "@" character';
        isvalid = false;
    } 
    else {
        let parts = email.split('@');
        if (parts[0].length === 0 || parts[1].length <= 4) {
            errorMessage2.textContent = 'Invalid email format';
            isvalid = false;
        } else {
            errorMessage2.textContent = ''; 
        }
    }
    if(phone === ''){
        errorMessage3.textContent = 'Phone number cannot be empty'
        isvalid = false;
    }
    else if(phone.length < 10 || phone.length > 12){
        errorMessage3.textContent = 'Phone number must be between 10 and 12 digits'
        isvalid = false;
    }
    else if(isNaN(phone)){
        errorMessage3.textContent = 'Phone number must be between 10 and 12 digits'
        isvalid = false;
    }
    else {
        errorMessage3.textContent= ''
    }

    if (!selectedGender) {
        errorMessage4.textContent = 'Please select a gender';
        isValid = false;
    } 
    else {
        errorMessage4.textContent = '';
    }

    if (checkboxes.length !== 3) {
        errorMessage5.textContent = 'Please select all boxes';
        isvalid = false;
    } 
    else {
        errorMessage5.textContent = ''; 
    }

    if (isvalid) {
        alert('Form submitted successfully!');
        document.getElementById('myForm').submit();
    }
}