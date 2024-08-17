let fristName = document.querySelector("#fristName")
let lastName = document.querySelector("#lastName")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let regBtn = document.querySelector("#signup")

regBtn.addEventListener("click" , function(e){
    e.preventDefault();
    if(fristName.value === "" || lastName.value === "" || email.value === "" || password.value === ""){
        alert("pleace fill data")
    }else{
        localStorage.setItem("fristname" ,fristName.value )
        localStorage.setItem("lastname" , lastName.value)
        localStorage.setItem("email" , email.value)
        localStorage.setItem("password" ,password.value)
    
        setTimeout(() => {
            window.location = "login.html"
        },1500)
    }
   

})