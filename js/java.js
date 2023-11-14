let button = document.querySelector(".btn")
let loginForm = document.querySelector(".login-form-container")





button.addEventListener('click', () =>{
    loginForm.classList.add('active')
})
button.addEventListener('click', () =>{
    loginForm.classList.remove('active')
});