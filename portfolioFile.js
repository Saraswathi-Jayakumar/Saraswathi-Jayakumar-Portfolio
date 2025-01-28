





var toggleButton =document.getElementsByClassName("Menu")[0];
var navbarLinks =document.getElementsByClassName("listItems")[0];

toggleButton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active');
});
