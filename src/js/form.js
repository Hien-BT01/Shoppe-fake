
const alreadyAccount = document.querySelector("#already-acc")
const newAccount = document.querySelector("#new-acc")
const container = document.querySelector(".container-form")
const loginEmailField = document.querySelector("#email-in")
const loginPasswordField = document.querySelector("#password-in")
const signUpEmailField = document.querySelector("#email_box");
const signUpPasswordField = document.querySelector("#password_box");
const signUpConfirmPasswordField = document.querySelector("#confirm_box");
const signInEmail = document.querySelector("#email-in")
const signInPassword = document.querySelector("#password-in")


Cookies.set("isLog","false", { path: "/" })
let accounts = [{
    userName:"hienbui27g@gmail.com",
    password:"123456789"
}];

function goNewAccount(){
    container.classList.add("switch-active"); 
}

function goAlreadyHaveAccount(){
    container.classList.remove("switch-active")
    console.log(true);
    signUpEmailField.value = ""
    signUpPasswordField.value = ""
    signUpConfirmPasswordField.value = ""
}
function signUp(e){
    e.preventDefault();
    if(signUpPasswordField.value !== signUpConfirmPasswordField.value){
        alert("Confirmed password is different from original password")
        return;
    }
    const userAccount = {
        userName:signUpEmailField.value,
        password:signUpPasswordField.value
    }
    const checkIsSameEmail = accounts.every(account => account.userName !== userAccount.userName);
    if(checkIsSameEmail === true){
        accounts = [...accounts,userAccount]
        alert("Sign up sucessfully")
        container.classList.remove("switch-active");
    }else{
        alert("This email has already existed")
    }
    signUpEmailField.value = ""
    signUpPasswordField.value = ""
    signUpConfirmPasswordField.value = ""
}
function signIn(e){
    const userAccount = {
        userName:signInEmail.value,
        password:signInPassword.value
    }
    const {userName, password} = userAccount;
    const isValidAccount = accounts.some(account => account.userName === userName && account.password === password)
    
    if(isValidAccount === false){
        e.preventDefault();
        alert("Email account or Password is wrong")
        return;
    }
    Cookies.set("isLog","true")
}





