var dottedMenu = document.querySelector('.dotted-menu')

var mobileMenu = document.querySelector('.mobile-menu')

var a_parent =  document.querySelectorAll(".a_parent");


dottedMenu.addEventListener("click", function(){
    mobileMenu.classList.toggle("active");
    
    a_parent.forEach(function(aitem){
        aitem.classList.remove("active");
    })
})


a_parent.forEach(function(aitem){
    aitem.addEventListener("click", function(){
        a_parent.forEach(function(aitem){
            aitem.classList.remove("active");
        })
        aitem.classList.add("active");
});