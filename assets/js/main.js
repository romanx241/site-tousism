
$('.services > div').hover(function(){
       $(this).find('p').slideDown(); 
 }, function(){
     $(this).find('p').slideUp();
 });

 $('.about-text').hover(function(){
    $(this).find('.short-line').animate({
        width: '450px',
        height: '5px'
    }, 500);
},  function(){
    $(this).find('.short-line').animate({
        width: '100px',
        height: '3px'
    }, 500);
});


$('.modal-backdrop').hover(function(){
    $(this).find('.short-line').animate({
        width: '300px',
        height: '5px'
    }, 500);
},  function(){
    $(this).find('.short-line').animate({
        width: '100px',
        height: '3px'
    }, 500);
});


$('.reviews').hover(function(){
    $(this).find('.short-line').animate({
        width: '150px',
        height: '5px'
    }, 500);
},  function(){
    $(this).find('.short-line').animate({
        width: '100px',
        height: '3px'
    }, 500);
});

$('.arrow-up a').click(function(event){
    $('html, body').animate({
        scrollTop: 300
    }, 1000)
    return false;
});

$('.js-click-slide-to').click(function(event){
     let target = $(this).attr('href');
     $('html, body').animate({
        scrollTop: $(target).offset().top - 81
     }, 1000)
     return false;
});



  $(document).ready(function(){
     $('.main-image .slider-navigation .right').click(function() {
         let currentImage = $('.slide.active');
         let currentImageIndex = $('.slide.active').index();
         console.log(currentImageIndex);
         let rightImageIndex = currentImageIndex + 1;
         let rightImage = $('.slide').eq(rightImageIndex);
         currentImage.removeClass('active');

     if(rightImageIndex == ($('.slide:last').index()+1)) {
         $('.slide').eq(0).addClass('active');
     } else {
         rightImage.addClass('active');
         }
     });
     
     $('.main-image .slider-navigation .left').click(function() {
         let currentImage = $('.slide.active');
         let currentImageIndex = $('.slide.active').index();
         let leftImageIndex = currentImageIndex - 1;
         let leftImage = $('.slide').eq(leftImageIndex);
            
             currentImage.removeClass('active');
             leftImage.addClass('active');
         });
    });
   

    