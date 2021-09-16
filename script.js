
document.addEventListener('DOMContentLoaded', function() {

    window.addEventListener('scroll', function() {
        console.log("scroll")
        const nav = document.querySelector('.navbar');
        if (this.scrollY > 20) {
            nav.classList.add('sticky')
        } else {
            nav.classList.remove('sticky');
        }
      
    });
    document.querySelector('.menu-btn').addEventListener('click', function(){
        document.querySelector('.navbar .menu').classList.toggle('active');

    });
})