const form = document.querySelector("form")
const signUpPage = document.querySelector(".wrapper")
const sucessMassage = document.querySelector(".sucess-massage")
const buttonDismiss = document.querySelector(".button-dismiss")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    signUpPage.classList.toggle("hide")
    sucessMassage.classList.toggle("hide")

})

buttonDismiss.addEventListener("click", (e) => {
    e.preventDefault()
    signUpPage.classList.toggle("hide")
    sucessMassage.classList.toggle("hide")
})