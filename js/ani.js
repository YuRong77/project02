$(document).ready(function(){
    $('a').on('click',function(){
        $('.msg').stop().slideUp(1).slideDown(600);
        $('.temp').stop().fadeOut(1).fadeIn(800);
        $('.pic').stop().fadeOut(1).fadeIn(900);
    })
})