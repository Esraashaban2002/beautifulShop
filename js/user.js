let links = document.querySelector("#links")
 let menues = document.querySelector("#menues")
 let userData = document.querySelector("#userData")
 let username = document.querySelector("#user")


if(localStorage.getItem("fristname")){
    links.remove()
    menues.style.visibility = "visible"
    userData.style.visibility = "visible"
    username.innerHTML = "Welcome:  "  + localStorage.getItem("fristname")
}

let logOutBtn = document.querySelector("#logOut")
logOutBtn.addEventListener("click" , function (){
    localStorage.clear();
    setTimeout(() => {
        window.location = "login.html"
    },500)
})

let cardProduct = document.querySelector("#product")
let listOfItem = document.querySelector(".allItems")
let badeg = document.querySelector("#addCart")

let addItems = localStorage.getItem("cardProducts") ? JSON.parse(localStorage.getItem("cardProducts")) : [];

if(addItems){
   addItems.map((item)=> {
       listOfItem.innerHTML += `  <li>
                           <div class="dropdown-item items d-flex">
                           <span id="productName"> ${item.title} </span>
                           <div class="listBtn">
                           <span class="text-dark" id="productNumber_${item.id}"> ${item.quantity} </span>
                           <button class="text-success h4" id="addProduct" onclick="addItem(${item.id})" >+</button>
                            <button class="text-danger h4" id="removeProduct" onclick="removeItem(${item.id})" > - </button>
                           </div>
                         </div>
                       </li> `
   })
   badeg.style.display = "block"

   badeg.innerHTML = addItems.length 
}

function reload() {
    let cardProducts = JSON.parse(localStorage.getItem('cardProducts')) || [];
    cardProducts.forEach(item => {

        let addToCardBtn = document.querySelector(`#add-to-card_${item.id}`);
        if (addToCardBtn) {
            addToCardBtn.style.backgroundColor = "#ff4a4a";
            addToCardBtn.innerHTML = "Remove from card";
            addToCardBtn.style.fontSize = "18px";
        }
      });

    let cardProductLength = document.querySelectorAll(".allItems li").length;
    badeg.style.display = "block";
    badeg.innerHTML = cardProductLength;

 let itemsFov = JSON.parse(localStorage.getItem('favoriteProducts')) || [];
    itemsFov.map(item => {

    let hearIcon = document.querySelector(`#heart_${item.id}`)
    if (hearIcon) {
        hearIcon.style.color = "#ff4a4a"
    }
  });

}
window.addEventListener('load', reload);


function removeItem(id){
    let cardProducts = JSON.parse(localStorage.getItem('cardProducts')) || [];
    let item = cardProducts.find((item) => item.id === id);

 if(item.quantity > 1){
    item.quantity = (item.quantity || 0) - 1;
        localStorage.setItem('cardProducts', JSON.stringify(cardProducts));
        setTimeout(() => {
            window.location.reload();
        },500)
 }else{
    cardProducts = cardProducts.filter(item => item.id !== id);
    localStorage.setItem('cardProducts', JSON.stringify(cardProducts));
    setTimeout(() => {
      window.location.reload();
  },500)
 }

 
  }
  function addItem(id) {
    let cardProducts = JSON.parse(localStorage.getItem('cardProducts')) || [];
    let item = cardProducts.find((item) => item.id === id);
    
    if (item) {
        item.quantity = (item.quantity || 0) + 1;
        localStorage.setItem('cardProducts', JSON.stringify(cardProducts));
  }
  setTimeout(() => {
    window.location.reload();
},500)
  }


