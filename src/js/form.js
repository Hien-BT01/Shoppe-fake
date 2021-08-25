const alreadyAccount = document.querySelector("#already-acc")
const newAccount = document.querySelector("#new-acc")
const container = document.querySelector(".container-form")
const signupForm = document.querySelector(".signup");
const signinForm = document.querySelector(".signin");
const loginEmailField = document.querySelector("#email-in")
const loginPasswordField = document.querySelector("#password-in")
const signUpEmailField = document.querySelector("#email_box");
const signUpPasswordField = document.querySelector("#password_box");
const signUpConfirmPasswordField = document.querySelector("#confirm_box");

console.log(signUpEmailField);
console.log(signUpPasswordField);
console.log(signUpConfirmPasswordField);
newAccount.addEventListener("click",e => {
    container.classList.add("switch-active");
})
alreadyAccount.addEventListener("click",e => {
    container.classList.remove("switch-active")
    signUpEmailField.value = ""
    signUpPasswordField.value = ""
    signUpConfirmPasswordField.value = ""
})

signupForm.addEventListener("submit",e => {
    e.preventDefault();
    container.classList.remove("switch-active");
    signUpEmailField.value = ""
    signUpPasswordField.value = ""
    signUpConfirmPasswordField.value = ""
})

signinForm.addEventListener("submit", e => {
    if(loginEmailField.value !== "TestAccount@gmail.com" || loginPasswordField.value !== "H123456789!"){
        e.preventDefault();
        alert("Email account or Password is wrong")
    }
})
