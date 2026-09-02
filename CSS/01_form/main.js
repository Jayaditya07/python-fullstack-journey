console.log("JS CONNECTED");

let form = document.querySelector(`#signupForm`)
form.addEventListener("submit",function(event){
    event.preventDefault()
    let username = document.querySelector(`input[name = "name"]`).value
    let email = document.querySelector(`input[name = "email"]`).value
    let password = document.querySelector(`input[name = "password"]`).value
    console.log(username);
    console.log(email);
    console.log(password);
})
