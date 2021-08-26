
const alreadyAccount = document.querySelector("#already-acc")
const newAccount = document.querySelector("#new-acc")
const container = document.querySelector(".container-form")
const loginEmailField = document.querySelector("#email-in")
const loginPasswordField = document.querySelector("#password-in")
const signUpEmailField = document.querySelector("#email_box");
const signUpPasswordField = document.querySelector("#password_box");
const signUpConfirmPasswordField = document.querySelector("#confirm_box");


Cookies.set("isLog","false", { path: "/" })


function goNewAccount(){
    container.classList.add("switch-active"); 
}

function goAlreadyHaveAccount(){
    container.classList.remove("switch-active")
    signUpEmailField.value = ""
    signUpPasswordField.value = ""
    signUpConfirmPasswordField.value = ""
}
function signUp(e){
    e.preventDefault();
    container.classList.remove("switch-active");
    signUpEmailField.value = ""
    signUpPasswordField.value = ""
    signUpConfirmPasswordField.value = ""
}
function signIn(e){
    if(loginEmailField.value !== "TestAccount@gmail.com" || loginPasswordField.value !== "H123456789!"){
        e.preventDefault();
        alert("Email account or Password is wrong")
        return;
    }
    Cookies.set("isLog","true")
}




