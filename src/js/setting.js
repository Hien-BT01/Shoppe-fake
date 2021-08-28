export function showLogOut(element) {
  element.classList.toggle("logout-active");
}

export function showChangePassword(footerElement, dataAccounts,username) {
  const divElement = document.createElement("div");
  divElement.classList.add("change-password__container");
  divElement.innerHTML = `
  <div class="change-password__content">
    <div class="change-password__header">
        <h2>Đổi mật khẩu</h2>
        <span class="closePassword"><i class="fas fa-times"></i></span>
    </div>
    <form>
        <div class="field">
            <input type="password" placeholder="Nhập mật khẩu hiện tại" id="current-pass">
        </div>
        <div class="field">
            <input type="password" placeholder="Nhập mật khẩu mới" id="new-pass">
        </div>
        <div class="field">
            <input type="password" placeholder="Nhập lại mật khẩu mới" id="confirm-pass">
        </div>
        <button type="submit">Lưu thay đổi</button>
    </form>
  </div>
  `
  footerElement.insertAdjacentElement("afterend", divElement)

  const closeChangePass = document.querySelector(".closePassword")
  const formChangePass = document.querySelector(".change-password__content form")
  const exPasswordField = document.querySelector("#current-pass")
  const newPasswordField = document.querySelector("#new-pass")
  const confirmNewPasswordField = document.querySelector("#confirm-pass")

  closeChangePass.addEventListener("click",() => closeChangePassword(divElement))
  formChangePass.addEventListener("submit",e => modifyPassWord(e, username, dataAccounts, exPasswordField, newPasswordField,confirmNewPasswordField, divElement))
}

function closeChangePassword(element){
    element.remove()
}

function modifyPassWord(event, username, accounts, exField, newField, confirmField, divElement){
    event.preventDefault();
    const exPassword = exField.value;
    const newPassword = newField.value;
    const confirmNewPassword = confirmField.value;
    const isValidExPassword = accounts.some(account => {
        return account.password === exPassword && account.userName === username
    })
    if(isValidExPassword === false){
        alert("Your ex-password is wrong");
        return;
    }else {
        if(newPassword.length < 8){
            alert("Your value is too Short, please use other password is greater than 8 characters")
            return;
        }else{
            if(newPassword.length !== confirmNewPassword.length){
                alert("Confirmed password is different from original password")
                return;
            }else{
                const user = {
                    username:username,
                    password:newPassword
                }
                const updateAccount = accounts.map(account => account.userName === user.username ? {...account,password:user.password} : account)
                localStorage.setItem("accountList",JSON.stringify(updateAccount));
                alert("Modifying Password successfully");
                divElement.remove();
            }
        }
    }
}

