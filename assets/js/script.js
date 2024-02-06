let getUserEmail=localStorage.getItem("userEmail");
let links =document.querySelectorAll(".links");

let disable =document.querySelectorAll(".disable");

let cart =document.querySelector(".cart");

let userName= document.querySelector("#username");
if(getUserEmail){
    links.forEach((link)=>link.remove());
    disable.forEach((d)=>d.style.display="block");
    cart.style.display="flex";

    userName.innerHTML=localStorage.getItem("userName");
}

let counter=0;
let cartBtn=document.querySelector("#cart");
let cartProductDiv1=document.querySelector(".cart_prodects");

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
function viewProduct(){
    location.assign('cart.html')
   }

   ///////////////////////////////////
 const cartList=document.querySelector('#favouriteItems');
const number=document.querySelector('#number')
   function drowList(){
    let cart_Products= JSON.parse(localStorage.getItem('items')) 

    number.innerHTML=cart_Products.length;
    cartList.innerHTML="";
   if(localStorage.getItem('items')){
    if(cart_Products.length !=0){
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
   drowList();
   function plusBtn(id){
    let cartProducts= JSON.parse(localStorage.getItem('items')) ;
    let product= cartProducts.find((item)=>item.id === id);
     
    for (let index = 0; index < cartProducts.length; index++) {
         if(cartProducts[index] === product )
        { cartProducts[index].count++;
             localStorage.setItem('items',JSON.stringify(cartProducts));
            }
    }
    drowList();
   }
   function minusBtn(id){
    let cartProducts= JSON.parse(localStorage.getItem('items')) ;
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

    drowList();
   }