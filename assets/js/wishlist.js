let getUserEmail=localStorage.getItem("userEmail");
 

let userName= document.querySelector("#username");
if(getUserEmail){
  
   
    userName.innerHTML=localStorage.getItem("userName");
}
 
let links =document.querySelectorAll(".links");

let disable =document.querySelectorAll(".disable");

let cart =document.querySelector(".cart");
const cartList=document.querySelector('#favouriteItems');
const number=document.querySelector('#number')
const search=document.querySelector('.search');
const row =document.querySelector('.row')
const select=document.querySelector('select')
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
 
let allProducts= document.querySelector(".products");
let products=[
    {
id:1,
count:1,
fav:"gray",
category:"Jaket",
price:99.0,
title:"Brown Long Jacket",
imgUrl:"./assets/images/PRODECTS/LONGJACKET1.jpg",
},
{
    id:3,
    count:1,
    fav:"gray",
    category:"Jaket",
    price:99.0,
    title:"White Long Jacket",
    imgUrl:"./assets/images/PRODECTS/LONGJACKET3.jpg",
    },

    {
        id:4,
        count:1,
        fav:"gray",
        category:"Jaket",
        price:79.0,
        title:"Yallow Short Jacket",
        imgUrl:"./assets/images/PRODECTS/SHORTJACKET.jpg",
        },     
        {
            id:5,
            count:1,
            fav:"gray",
            category:"Sweater",
            price:40.0,
            title:"Simple, French-Inspired Knitwear",
            imgUrl:"./assets/images/PRODECTS/Sweater2.jpg",
            },
            {
                id:6,
                count:1,
                fav:"gray",
                category:"Sweater",
                price:30.0,
                title:"Simple White Sweater",
                imgUrl:"./assets/images/PRODECTS/Sweater1.jpg",
                },
                {
                    id:7,
                    count:1,
                    fav:"gray",
                    category:"Sweater",
                    price:30.0,
                    title:"Crewneck & Swoop Neck Sweaters ",
                    imgUrl:"./assets/images/PRODECTS/Sweater3.jpg",
                    },
                    {
                        id:8,
                        count:1,
                        fav:"gray",
                        category:"Bag",
                        price:50.0,
                        title:"leather shoulder bag",
                        imgUrl:"./assets/images/PRODECTS/collect3.jpg",
                        },
                    {
                        id:9,
                        count:1,
                        fav:"gray",
                        category:"Bag",
                        price:50.0,
                        title:"Sustainable leather shoulder bag",
                        imgUrl:"./assets/images/PRODECTS/bag1.jpg",
                        },

]

function fillProdect(){
   let products= JSON.parse(localStorage.getItem('favourite'));
    let data = products.map((product)=>{

        return `
    <div id="${product.id}" class="col-lg-3 col-md-6 service-item text-center py-3 ">
    <div class="card"  >
        <img src="${product.imgUrl}" class="card-img-top" alt="LONG JACKET">
        <div class="card-body">
          <H3>${product.price}.00$</H3>
          <p class="card-text">${product.title} </p>
           
          <div class="shoping-button">
            <button type="button" class="btn btn-dark border-0 rounded-5 " onClick="addToCart(${product.id})">ADD TO CART</button>
            <a href="#" style="margin-left: auto; display: inline-block;" >
            <i class="fas fa-heart" style="font-size: 1.5rem; color:${product.fav}"
             id="${product.id}" onClick='addFavourite(${product.id})'></i></a>

            </div>
        </div>
      </div>
</div>
        `
    })
    allProducts.innerHTML=data;
}

fillProdect();
let cartProducts=[];
let cartProductDiv=document.querySelector(".cart_prodects div");

function check(){
    if(!localStorage.getItem("userName"))
    setTimeout(()=>{
        location.assign('login.html')
 },1000)
}
function addToCart(id){
    check();
    let product= products.find((item)=>item.id === id);
   // cartList.innerHTML+= `<p style="font-size: 14px;">${product.title}</p>`
    console.log(product);
    cartProducts.push(product)
        localStorage.setItem('items',JSON.stringify(cartProducts));
      
        
        number.innerHTML=cartProducts.length;
        drowList();
}
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
   let favourite=[];

   function addFavourite(id,e){
    
    let product= products.find((item)=>item.id === id);

    
if(localStorage.getItem('userName') ){
    if(product.fav=='red'){
        for (let index = 0; index < products.length; index++) {
            if(products[index] === product )
            products[index].fav='gray';
       }
        favourite.splice(favourite.findIndex((x)=>{
            return favourite.id==id;
        }),1)
        localStorage.setItem('favourite',JSON.stringify(favourite));
    }
    else{
        for (let index = 0; index < products.length; index++) {
            if(products[index] === product )
            products[index].fav='red';
       }
        favourite.push(product) 
        localStorage.setItem('favourite',JSON.stringify(favourite));
    }
}else{
    setTimeout(()=>{
        location.assign('login.html')
    },500)
}

  
fillProdect();
drowList();
}
 
 

function viewProduct(){
    location.assign('cart.html')
   }