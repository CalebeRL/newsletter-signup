const form = document.querySelector("form")
const input = document.querySelector("#input")
const signUpPage = document.querySelector(".wrapper")
const sucessMessage = document.querySelector(".sucess-message")
const buttonDismiss = document.querySelector(".button-dismiss")
const confirmationEmail = document.querySelector(".confirmation-email")



form.addEventListener("submit", (e) => {
    e.preventDefault()
    signUpPage.classList.toggle("hide")
    sucessMessage.classList.toggle("hide")

    confirmationEmail.innerHTML = input.value
})

buttonDismiss.addEventListener("click", (e) => {
    e.preventDefault()
    signUpPage.classList.toggle("hide")
    sucessMessage.classList.toggle("hide")
})