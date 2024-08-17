let Products = [
    {
        id : 1,
        title : "Dress blue" ,
        price : "430$" ,
        categeory : "dress",
        img : "images/dress-blue.jpeg",
        quantity : 1,
    },
    {
        id : 2,
        title : "Dress brown" ,
        price : "500$" ,
        categeory : "dress",
        img : "images/dress-brown.jpg",
        quantity : 1,
    },
    {
        id : 3,
        title : "Dress green" ,
        price : "610$" ,
        categeory : "dress",
        img : "images/dress-green.jpeg",
        quantity : 1,
    },
    {
        id : 4,
        title : "Malaysian veil" ,
        price : "100$" ,
        categeory : "veil",
        img : "images/malaysian veil.jpg",
        quantity : 1,
    },
    {
        id : 5,
        title : "French veil" ,
        price : "150$" ,
        categeory : "veil",
        img : "images/french veil.jpg",
        quantity : 1,
    },
    {
        id : 6,
        title : "Ankle Socks" ,
        price : "50$" ,
        categeory : "socks",
        img : "images/Ankle Socks.jpg",
        quantity : 1,
    },
    {
        id : 7,
        title : "Bracelet & Ring" ,
        price : "120$" ,
        categeory : "accessories",
        img : "images/Bracelet & Ring.jpg",
        quantity : 1,
    },
    {
        id : 8,
        title : "Bracelets" ,
        price : "80$" ,
        categeory : "accessories",
        img : "images/Bracelets.jpg",
        quantity : 1,
    },
    {
        id : 9,
        title : "Rangs" ,
        price : "160$" ,
        categeory : "accessories",
        img : "images/rangs.jpg",
        quantity : 1,
    },
    {
        id : 10,
        title : "Earring" ,
        price : "30$" ,
        categeory : "accessories",
        img : "images/Earring.jpg",
        quantity : 1,
    },
    {
        id : 11,
        title : "Necklace" ,
        price : "100$" ,
        categeory : "accessories",
        img : "images/necklace.jpg",
        quantity : 1,
    },
    {
        id : 12,
        title : "Hijab pin" ,
        price : "80$" ,
        categeory : "accessories",
        img : "images/hijab pin.jpg",
        quantity : 1,
    },
    {
        id : 13,
        title : "Crochet bandana" ,
        price : "20$" ,
        categeory : "accessories",
        img : "images/crochet bandana.jpg",
        quantity : 1,
    },
    {
        id : 14,
        title : "Polarized Sunglasses" ,
        price : "120$" ,
        categeory : "sunglasses",
        img : "images/Polarized Sunglasses.jpg",
        quantity : 1,
    },
    {
        id : 15,
        title : "Square Sunglasses" ,
        price : "150$" ,
        categeory : "sunglasses",
        img : "images/Square Sunglasses.jpg",
        quantity : 1,
    },
    {
        id : 16,
        title : "Crochet bag" ,
        price : "100$" ,
        categeory : "bag",
        img : "images/crochet bag.jpg",
        quantity : 1,
    },
    {
        id : 17,
        title : "Chain bag" ,
        price : "120$" ,
        categeory : "bag",
        img : "images/chain bag.jpg",
        quantity : 1,
    },
    {
        id : 18,
        title : "Hand made bag" ,
        price : "80$" ,
        categeory : "bag",
        img : "images/haand made bag.jpg",
        quantity : 1,
    },
    {
        id : 19,
        title : "Watch green" ,
        price : "120$" ,
        categeory : "watch",
        img : "images/watch green.jpg",
        quantity : 1,
    },
    {
        id : 20,
        title : "Mini Focus" ,
        price : "100$" ,
        categeory : "watch",
        img : "images/Mini Focus.jpg",
        quantity : 1,
    },
    {
        id : 21,
        title : "Rose gold" ,
        price : "150$" ,
        categeory : "watch",
        img : "images/rose gold.jpg",
        quantity : 1,
    },
    {
        id : 22,
        title : "Si prfume " ,
        price : "250$" ,
        categeory : "prfume",
        img : "images/prfum1.jpeg",
        quantity : 1,
    },
    {
        id : 23,
        title : "Rose prefume" ,
        price : "200$" ,
        categeory : "prfume",
        img : "images/prfum2.jpg",
        quantity : 1,
    },
    {
        id : 24,
        title : "Homme Joop" ,
        price : "180$" ,
        categeory : "prfume",
        img : "images/prfum3.jpeg",
        quantity : 1,
    },
    {
        id : 25,
        title : "Gissah" ,
        price : "150$" ,
        categeory : "prfume",
        img : "images/prfum4.png",
        quantity : 1,
    },
    {
        id : 26,
        title : "Heels" ,
        price : "250$" ,
        categeory : "shoes",
        img : "images/Heels.jpg",
        quantity : 1,
    },
    {
        id : 27,
        title : "Kochi beige" ,
        price : "320$" ,
        categeory : "shoes",
        img : "images/kochi beige.jpg",
        quantity : 1,
    },
    {
        id : 28,
        title : "Sandal" ,
        price : "200$" ,
        categeory : "shoes",
        img : "images/sandal.jpg",
        quantity : 1,
    },
    {
        id : 29,
        title : "Slipper" ,
        price : "150$" ,
        categeory : "shoes",
        img : "images/slipper.jpg",
        quantity : 1,
    },
    {
        id : 30,
        title : "Soap flat" ,
        price : "220$" ,
        categeory : "shoes",
        img : "images/soap flat.jpg",
        quantity : 1,
    },
]


///////////////////////////////////////////////////////
function fliters(){
    let search = document.querySelector("#search").value.toLowerCase() 
    let select = document.querySelector("#select ").value
    search = Products.filter(item=> {
    let itemValue = item[select] ? item[select].toLowerCase() : "";
    return itemValue.includes(search);
  }) 

  let items = search.map((item) => {
    return ` 
    <div class="col-12 col-md-3 mb-3">
                <div class="card shadow">
                    <div class="card-body cardBody">
                      <img src="${item.img}" alt="">
                      <div class="card-info">
                        <h2 class="item-title"><strong>Product:</strong> ${item.title}</h2>
                        <p><strong>Category:</strong> ${item.categeory}</p>
                        <p ><strong>Price:</strong> ${item.price}</p>
                      </div> 
                      <div class="card-icon">
                        <button class="btn1" id="add-to-card_${item.id}" onclick="addToCard(${item.id})" >Add to card</button>
                      <i class="fas fa-heart" onclick="addToFavorite(${item.id})" id="heart_${item.id}"></i>
                      </div>
                    </div>
                  </div> <!-- card -->
            </div> <!-- item -->
            `
})
cardProduct.innerHTML = items
 
}

/////////////////////////////////////////////////
function addToCard(id){
    if(localStorage.getItem("fristname")){
        let chooseItem = Products.find((item) => item.id === id)
        let addOnce = document.querySelector(`#card-product_${id}`)

        if(!addOnce){
         listOfItem.innerHTML += `  <li id="card-product_${chooseItem.id}">
                            <div class="dropdown-item items d-flex">
                            <span id="productName"> ${chooseItem.title} </span>
                            <div class="listBtn">
                           <span class="text-dark" id="productNumber_${chooseItem.id}">${chooseItem.quantity}</span>
                           <button class="text-success h4" id="addProduct" onclick="addItem(${chooseItem.id})" >+</button>
                            <button class="text-danger h4" id="removeProduct" onclick="removeItem(${chooseItem.id})" > - </button>
                           </div>
                          </div>
                        </li> `
                        
                       

    addItems = [...addItems , chooseItem]
    localStorage.setItem("cardProducts" ,JSON.stringify(addItems))

    let cardProductLength = document.querySelectorAll(".allItems li")
    badeg.style.display = "block"
    badeg.innerHTML = cardProductLength.length

        let addtocardBtn = document.querySelector(`#add-to-card_${id}`)
        addtocardBtn.style.backgroundColor = "#ff4a4a"
        addtocardBtn.innerHTML = "Remov from card"
        addtocardBtn.style.fontSize = "18px"

       
}else{
    let addtocardBtn = document.querySelector(`#add-to-card_${id}`)
    addtocardBtn.innerHTML = "Add to card"

    let items = JSON.parse(localStorage.getItem('cardProducts')) || [];
    items = items.filter(item => item.id !== id);
    localStorage.setItem('cardProducts', JSON.stringify(items));
    setTimeout(() => {
      window.location.reload();
  },500)
       
}

    }else{
        setTimeout(() => {
            window.location = "login.html"
        },500)
    }
}



function drowItems(){
 let items = Products.map((item) => {
    return ` 
    <div class="col-12 col-md-3 mb-3">
                <div class="card shadow">
                    <div class="card-body cardBody">
                      <img src="${item.img}" alt="">
                      <div class="card-info">
                        <h2 class="item-title"><strong>Product:</strong> ${item.title}</h2>
                        <p><strong>Category:</strong> ${item.categeory}</p>
                        <p ><strong>Price:</strong> ${item.price}</p>
                      </div> 
                      <div class="card-icon">
                        <button class="btn1" id="add-to-card_${item.id}" onclick="addToCard(${item.id})" >Add to card</button>
                      <i class="fas fa-heart" onclick="addToFavorite(${item.id})" id="heart_${item.id}"></i>
                      </div>
                    </div>
                  </div> <!-- card -->
            </div> <!-- item -->
            `
})
cardProduct.innerHTML = items
}
drowItems()
let cardItems = document.querySelector("#product")

function addToFavorite(id){

    if(localStorage.getItem("fristname")){
        let favoriteItem = localStorage.getItem("favoriteProducts") ? JSON.parse(localStorage.getItem("favoriteProducts")) : [];
        let hearIcon = document.querySelector(`#heart_${id}`)
        let itemsFov = Products.find((item) => item.id === id)
        let x = favoriteItem.find((item) => item.id === itemsFov.id)

   if(!x){         

    favoriteItem = [...favoriteItem , itemsFov]
    localStorage.setItem("favoriteProducts" ,JSON.stringify(favoriteItem))
    hearIcon.style.color = "#ff4a4a" 
     
    }else{ 
     hearIcon.style.color = "#ddd"

     let items = JSON.parse(localStorage.getItem('favoriteProducts')) || [];
      items = items.filter(item => item.id !== id);
        localStorage.setItem('favoriteProducts', JSON.stringify(items));
    }   
     
}else{
    setTimeout(() => {
        window.location = "login.html"
    },500) 
}
}
    













