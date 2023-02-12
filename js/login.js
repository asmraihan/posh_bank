
//1  add click handler with submit btn
document.getElementById('btn-submit').addEventListener('click', function(){
//2  get the email address iside email field
   const emailField = document.getElementById('user-email')
   const email = emailField.value

//3  get the email address iside email field
   const passField = document.getElementById('user-pass')
   const pass = passField.value
//4 verify
    if(email==='asm' && pass ==='123'){
       window.location.href = 'bank.html'
    }
    else{
        alert('invalid user !!!\n email : asm \n password : 123')
    }
})