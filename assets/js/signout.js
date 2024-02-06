 
 

  
let signOutBtn=document.querySelector("#signOut");
 

signOutBtn.addEventListener("click",function(e){
    e.preventDefault();
if(localStorage.getItem("userName") )
{
    
    localStorage.clear();
     alert("Success signout!")
    setTimeout(()=>{
        location.assign('login.html')
 },1000)
}
})


