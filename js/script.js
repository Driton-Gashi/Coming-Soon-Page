$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY < 20){
            $('header').removeClass("aktive");
        }else{
            $('header').addClass("aktive");

        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");

        }
        // if(body.offsetWidth == 768){
        //     for (let i = 0; i < li.length; i++) {
        //         li[i].addEventListener("click", function(){
        //             li[i].style.color="crimson";
        //         });
        //     }

        //     $('.menu li a').click(function(){
        //         $(this).addClass('important');
        //         $(!this).removeClass('important');
        //     }
        //     }
    })
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    })

    var typed = new Typed(".typing", {
        strings: ["UI/UX Designer", "Developer", "Freelancer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });
    var typed = new Typed(".typing-2", {
        strings: ["UI/UX Designer", "Developer", "Freelancer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });
    // Efekti Karuselit
$('.carousel').owlCarousel({
    margin:20,
    loop:true,
    autoplayTimeOut:2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false
        }
    }
});
})
var burger = document.querySelector('.burger');
var menu = document.querySelector('.menu');
var x = document.querySelector('.x');
var li = document.querySelectorAll('.menu li a');
var body = document.body;
burger.addEventListener('click', shownavbar);

function shownavbar(e) {
    menu.classList.add('aktive-menu')
}

x.addEventListener('click', hidenavbar);

function hidenavbar() {
    menu.classList.remove('aktive-menu')
    
}

    

