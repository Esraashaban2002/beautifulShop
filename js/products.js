let cardItems = document.querySelector("#product")
let totalPtice = document.querySelector("#totalPtice span")
let divTotalPtice = document.querySelector("#totalPtice ")
let productInCard = localStorage.getItem("cardProducts")
let productInCardObj = JSON.parse(productInCard)

if(productInCard){
    drowCardProducts(productInCardObj)
}

function drowCardProducts(Products){
  let total  = 0
    let items = Products.map((item) => {
    
      total +=  parseInt(item.price ) * parseInt(item.quantity)
       divTotalPtice.style.display = "block"
       return ` 
         <div class="col-12 col-md-5 mb-3">
            <div class="card shadow">
                <div class="card-body cardProducts ">
                  <img src="${item.img}" alt="">

                  <div class="card-info">
                    <div>
                    <h2 class="item-title"><strong>Product:</strong> ${item.title}</h2>
                    <p><strong>Category:</strong>${item.categeory}</p>
                    <p ><strong>Price:</strong> ${item.price} </p>    
                  </div>
                  <div class="card-icon">
                    <div class="listBtn">
                      <span class="text-dark" id="productNumber_${item.id}">${item.quantity}</span>
                      <button class="text-success h4" id="addProduct" onclick="addItem(${item.id})" >+</button>
                       <button class="text-danger h4" id="removeProduct" onclick="removeItem(${item.id})" > - </button>
                      </div>
                      <button class="btn btn-danger" onclick="removeFromCard(${item.id})"  >Remove</button>
                  </div>
                  </div>  <!-- card-info -->
                </div>
              </div> <!-- card -->
        </div> <!-- item -->
               `
   } )
   cardItems.innerHTML = items
   totalPtice.innerHTML = total
  
   }

   function removeFromCard(id) {
    let items = JSON.parse(localStorage.getItem('cardProducts')) || [];
    items = items.filter(item => item.id !== id);
    localStorage.setItem('cardProducts', JSON.stringify(items));
    setTimeout(() => {
      window.location.reload();
  },500)
}

let favoriteProductCard = localStorage.getItem("favoriteProducts")
let cardFavourt = document.querySelector(".productFavourt")
let favoriteProductCardObj = JSON.parse(favoriteProductCard)

if(favoriteProductCard){
  drowFavorriteProducts(favoriteProductCardObj)
}

function drowFavorriteProducts(Products){
  let fav = Products.map((item) => {
   
     return `
       <div class="swiper-slide" role="group" aria-label="1 / 10">
     <div class=" ">
                 <div class="card shadow" >
                     <div class="card-body cardBody" id="cardBody_${item.id}">
                       <img src="${item.img}" alt="">
                       <div class=" d-flex justify-content-between" >
                       <div class="card-info">
                         <h2 class="item-title"><strong>Product:</strong> ${item.title}</h2>
                         <p><strong>Category:</strong> ${item.categeory}</p>
                       </div> 
                       <div class="card-icon">
                         <i class="fas fa-heart" onclick="removeFromFavorite(${item.id})" id="heart_${item.id}" style="color:#ff4a4a;"></i>    
                       </div>
                       </div>
                     </div>
                   </div> <!-- card -->
             </div> <!-- item -->
             </div>
             `
            
 }
)
 cardFavourt.innerHTML = fav
 
   let cSty = Products.map((item) => {
    let cardBody = document.querySelector(`#cardBody_${item.id}`)
   cardBody.style.height = "40vh"
   })
   
    let x = document.querySelector(".swiper-slide")
     x.className = "swiper-slide swiper-slide-active "
 }

 function removeFromFavorite(id){
  let items = JSON.parse(localStorage.getItem('favoriteProducts')) || [];
  items = items.filter(item => item.id !== id);
    localStorage.setItem('favoriteProducts', JSON.stringify(items));

        setTimeout(() => {
          window.location.reload();
      },500)
 }



