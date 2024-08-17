let email = document.querySelector("#email")
let password = document.querySelector("#password")
let logBtn = document.querySelector("#signin")

let getEmail = localStorage.getItem("email")
let getPassword = localStorage.getItem("password")

logBtn.addEventListener("click" , function(e){
    e.preventDefault();
    if(email.value === "" || password.value === ""){
        alert("pleace fill data")
    }else{
       if(getEmail && getEmail.trim() === email.value.trim() && getPassword && getPassword.trim() === password.value.trim() ){
        setTimeout(() => {
            window.location = "index.html"
        },1500)
       }else{
        alert("Email or password is wrong")
       }
    
        
    }

})