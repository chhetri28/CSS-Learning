let backdrop= document.querySelector('.backdrop');
let modal=document.querySelector('.modal');
let modalNoButton=document.querySelector(".modal__action--negative");
let selectPlan=document.querySelectorAll('.plan button');
let toggleButton=document.querySelector('.toggle-button');
var mobileNav =document.querySelector('.mobile-nav');
// console.log(backdrop);
for(let i=0;i<selectPlan.length;i++){
    selectPlan[i].addEventListener('click',function(){
        modal.style.diplay='block';
        backdrop.style.diplay='block';
    });
}
backdrop.addEventListener("click",function(){
    mobileNav.style.display='none';
    closeModal();

});
modalNoButton.addEventListener("click",closeModal);
function closeModal(){
    backdrop.style.display="none";
    modal.style.display="none";
}

toggleButton.addEventListener('click',function(){
    mobileNav.style.display='block';
    backdrop.style.diplay='block';
});