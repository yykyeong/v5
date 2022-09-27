$(function(){
    
    $('#nav>ul>li>a').on("click",function(e){
    e.preventDefault();
    $("html, body").animate({scrollTop:$($(this).attr("href")).offset().top},
    500,"linear");
    });

    var dot=$('#nav>ul>li');
    var cont =$('#contents>div');

    $(window).scroll(function(){
        var wScroll =$(this).scrollTop();

        for(let i=0; i< cont.length;i++){
            if (wScroll >= cont.eq(i).offset().top){
                dot.removeClass("active");
                dot.eq(i).addClass("active");
            }
        }
    });

    var swiper = new Swiper(".schdSwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: false,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true
        },
        
        breakpoints: {
            768: {
                slidesPerView: 2

            },1200: {
                slidesPerView: 3
            }
        }
    });

    $('.showLineUp').hover(function(){
        $(this).find('img').attr('src','img/arrow_r.png');
        $(this).find('span').css('color','#c01c32')
    }, function(){
        $(this).find('img').attr('src','img/arrow_b.png');
        $(this).find('span').css('color','#000')
    });

    $(".showLineUp").click(function(){
        $("html, body").animate({scrollTop:$("#sec03").offset().top},1000);
    });

    $('.changeLeg').text($('.active .leg').text());



    $('.footer>li img').hover(function(){
        $(this).attr("src", $(this).attr("src").replace(".png", "_hover.png")); 
    }, function(){ 
        $(this).attr("src", $(this).attr("src").replace("_hover.png", ".png")); 
    }); 
    
});

