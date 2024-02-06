

let getUserEmail=localStorage.getItem("userEmail");
 
let userName= document.querySelector("#username");
if(getUserEmail){
  
    userName.innerHTML=localStorage.getItem("userName");
}

let prodects_cartDiv= document.querySelector(".prodects_cart");

let links =document.querySelectorAll(".links");

let disable =document.querySelectorAll(".disable");
let cart_count =document.querySelector("#cart_count");
 
let cart =document.querySelector(".cart");
const cartList=document.querySelector('#favouriteItems');
const number=document.querySelector('#number')
if(getUserEmail){
    links.forEach((link)=>link.remove());
    disable.forEach((d)=>d.style.display="block");
    cart.style.display="flex";

    userName.innerHTML=localStorage.getItem("userName");
}
/////////////////////////////////
let counter=0;
let cartBtn=document.querySelector("#cart");
let cartProductDiv1=document.querySelector(".cart_prodects");
let total =document.querySelector("#total_price");
let subtotal =document.querySelector("#subtotal");
let Checkout_price =document.querySelector("#Checkout_price");

cartBtn.addEventListener("click",function(e){
    e.preventDefault();
if(!localStorage.getItem("userName") )
{
    window.location="login.html"
}else{
    if(counter%2){
        cartProductDiv1.style.display="none";
    }else{
        cartProductDiv1.style.display="block";
    }
    

}
counter++;
})
 
let cartProducts=[];
 
let total_price=0;
///////////////////////////////
function drowList(){
    cartList.innerHTML="";
    number.innerHTML=0;
    if(localStorage.getItem('items')){
    number.innerHTML=JSON.parse(localStorage.getItem('items')).length;
    cart_count.innerHTML=JSON.parse(localStorage.getItem('items')).length;
    cartProducts=JSON.parse(localStorage.getItem('items'));
    cartList.innerHTML="";
   if(localStorage.getItem('items')){
    if(cartProducts.length !=0){
   let items= JSON.parse(localStorage.getItem('items')) 
   items.map((item)=>{
    cartList.innerHTML +=`
    <li class="pt-2 row">
    <p class="pt-2 col-4" style="font-size: 14px;">${item.title}</p>
   <div class="plus col-8 d-flex justify-content-lg-around">
        <span style="">${item.count}</span>
        <a href="#" class="pluss"><i class="fas fa-plus text-success" onclick="plusBtn(${item.id})"></i></a>
        <a href="#" class="minus"><i class="fas fa-minus text-danger" onclick="minusBtn(${item.id})"></i></a>
    </div>
</li>    
    `
   })
}
}}
   }
   drowList();
   ////////////////////////
   function plusBtn(id){
    let product= cartProducts.find((item)=>item.id === id);
     
    for (let index = 0; index < cartProducts.length; index++) {
         if(cartProducts[index] === product )
        { cartProducts[index].count++;
             localStorage.setItem('items',JSON.stringify(cartProducts));
            }
    }
    fillProdect();
    drowList();
   
   }
   function minusBtn(id){
    let product= cartProducts.find((item)=>item.id === id);
     
          for (let index = 0; index < cartProducts.length; index++) {
         if(cartProducts[index] === product ) { 
            if(cartProducts[index].count ===1){
                cartProducts.splice(index,1)
                localStorage.setItem('items',JSON.stringify(cartProducts))
            }else{
                cartProducts[index].count--;
                localStorage.setItem('items',JSON.stringify(cartProducts));
            }
             
           
            }
    }
    fillProdect();
    drowList();
   }
  
   ////////////////////
   function findtotal(){
    number.innerHTML=JSON.parse(localStorage.getItem('items')).length;
    cart_count.innerHTML=JSON.parse(localStorage.getItem('items')).length;
    cartList.innerHTML="";
   if(localStorage.getItem('items')){
    if(cartProducts.length !=0){
   let items= JSON.parse(localStorage.getItem('items')) 
   items.map((item)=>{
    cartList.innerHTML +=`
    <li class="pt-2 row">
    <p class="pt-2 col-4" style="font-size: 14px;">${item.title}</p>
   <div class="plus col-8 d-flex justify-content-lg-around">
        <span style="">${item.count}</span>
        <a href="#" class="pluss"><i class="fas fa-plus text-success" onclick="plusBtn(${item.id})"></i></a>
        <a href="#" class="minus"><i class="fas fa-minus text-danger" onclick="minusBtn(${item.id})"></i></a>
    </div>
</li>    
    `
   })
}
}
   }
/////////////////////////////
function fillProdect(){
    prodects_cartDiv.innerHTML=''
    if(localStorage.getItem('items')){
        let items= JSON.parse(localStorage.getItem('items')) ;
        console.log(items)
    let data = items.map((product)=>{
        console.log(product)
          total_price+=product.price*product.count;

        return `
        <div class="card mb-3">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <div class="d-flex flex-row align-items-center">
              <div>
                <img
                  src="   ${product.imgUrl}"
                  class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
              </div>
              <div class="ms-3">
                <h5>${product.title}"</h5>
                <p class="small mb-0">${product.category} </p>
              </div>
            </div>
            <div class="d-flex flex-row align-items-center">
              <div style="width: 50px;">
                <h5 class="fw-normal mb-0">${product.count} </h5>
              </div>
              <div style="width: 80px;">
                <h5 class="mb-0">$${product.price}.00</h5>
              </div>
              <a href="#!" style="color: #cecece;" onClick='deleteItem(${product.id})'><i class="fas fa-trash-alt"></i></a>
            </div>
          </div>
        </div>
      </div>
        `
    })
    prodects_cartDiv.innerHTML=data;
    subtotal.innerHTML=`$${total_price}.00`;
    total.innerHTML=`$${total_price-20}.00`;
    Checkout_price.innerHTML=`$${total_price-20}.00`;
}
}

fillProdect();
////////////////////////////
function deleteItem(id) {
    if(cartProducts.length !=0)
   {
     let product= cartProducts.find((item)=>item.id === id);
     
    for (let index = 0; index < cartProducts.length; index++) {
         if(cartProducts[index] === product )
        {  cartProducts.splice(index,1)
            localStorage.setItem('items',JSON.stringify(cartProducts))
            }
    }
}
    fillProdect();
    drowList();
}
/////////
function clearAll(){
    if(cartProducts.length !=0)
   {
    localStorage.setItem('items',"");
    cartList.innerHTML="";
    number.innerHTML=0;
    prodects_cartDiv.innerHTML="";
    subtotal.innerHTML=`$00.00`;
    total.innerHTML=`$00.00`;
    Checkout_price.innerHTML=`$00.00`;
    fillProdect();
    drowList();
   } 
}
///////////////
function Checkout(){
  if(cartProducts.length !=0)
  {
   alert("Checkout Successfully!");
   clearAll();
  } 

}
///////////////
function viewProduct(){
    location.assign('cart.html')
   }
   ////////////////////////////
