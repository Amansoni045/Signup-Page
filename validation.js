const form  = document.getElementById("form")
const firstname_input = document.getElementById("firstname-input")
const email_input = document.getElementById("email-input")
const password_input = document.getElementById("password-input")
const repeat_password_input = document.getElementById("repeat_password_input")

const allInputs = [firstname_input, email_input, password_input, repeat_password_input]

allInputs.forEach(input => {
    input.addEventListener("input", ()=>{
        if (input.parentElement.classList.contains("incorrect")){
            input.parentElement.classList.remove("incorrect")
        }
    })
})

