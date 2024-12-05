function form_submit(){
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let gender = ''
    let errorMessage = document.getElementById('errorMessage')
    let errorMessage2 = document.getElementById('errorMessage2')
    let errorMessage3 = document.getElementById('errorMessage3')
    let errorMessage4 = document.getElementById('errorMessage4')

    isnamevalid(name)
    isemailvalid(email)
    isphonevalid(phone)
}

function isnamevalid(name){
    if(name === ''){
        errorMessage.textContent = 'Nama tidak boleh kosong';
        event.preventDefault()
        return
    }
    if(name.length < 2 || name.length > 100){
        errorMessage.textContent = 'Nama harus terdiri dari 2 hingga 100 huruf';
        event.preventDefault()
        return
    }
    if(name.includes('  ')){
        errorMessage.textContent = 'Nama tidak boleh mengandung spasi ganda';
        event.preventDefault()
        return
    }
    if(name.indexOf(' ') === -1) {
        errorMessage.textContent = 'Nama lengkap harus terdiri dari minimal dua kata';
        event.preventDefault();
        return;
    }
    for(let i = 0; i < name.length; i++){
        let char =name[i]
        if(!(char >= 'A' && char <= 'Z') && !(char >= 'a' && char <= 'z') && char !== ' '){
            errorMessage.textContent = 'Nama hanya boleh mengandung huruf dan spasi';
            event.preventDefault()
            return
        }
    }
    errorMessage.textContent= ''
}

function isemailvalid(email){
    if(email === ''){
        errorMessage2.textContent = 'Email tidak boleh kosong'
        event.preventDefault()
        return
    }
    if(!email.includes('@')) {
        errorMessage2.textContent = 'Email '
        event.preventDefault()
        return
    }
    let check = email.split('@')
    if(check[0].length == 0 | check[1].length <= 4){
        errorMessage2.textContent = 'Email tidak boleh kosong'
        event.preventDefault()
        return
    }
    errorMessage2.textContent= ''
}

function isphonevalid(phone){
    if(phone === ''){
        errorMessage3.textContent = 'Phone Number tidak boleh kosong'
        event.preventDefault()
        return
    }
    if(phone.length < 10 || phone.length > 12){
        
    }
    if(isNaN(phone)){
        errorMessage3.textContent = 'Angka saja'
        event.preventDefault()
        return
    }
    errorMessage3.textContent= ''
}