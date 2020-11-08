
const logo = document.querySelector(".main_txt");
    logo.setAttribute("class","main_txt on")


$(function(){
    $('.qna_list li').click(function(){
        h= $(this).find('p').outerHeight();
        if($(this).hasClass('on')){
         $('.qna_list li').removeClass('on');
         $('.qna_list li').find('.answer_txt').stop().animate({height:0},500)
        }else{
         $('.qna_list li').find('.answer_txt').stop().animate({height:0},500)
         $(this).find('.answer_txt').stop().animate({height:h},500)
         $(this).addClass('on')
        }
   })
  //   label check
  $('.agree label').click(function(){
    if($(this).find('input').is(":checked") == true){
        $(this).parent().addClass('on')
    }else{
        $(this).parent().removeClass('on')
    }
})


var controller = new ScrollMagic.Controller();

var tween1_1 = TweenMax.to('.con01', 0.1, {
    top:-10,
    opacity:1,
    //x:100,
});

var scene1_1 = new ScrollMagic.Scene({
    triggerElement: ".con_img_wrap",
    triggerHook: 'onEnter', 
    offset: 400,
    duration:100
})
.setTween(tween1_1)
.addTo(controller)

var tween1_2 = TweenMax.to('.con01', 0.1, {
    top:-1000,
    opacity:0,
    //x:100,
});

var scene1_2 = new ScrollMagic.Scene({
    triggerElement: ".con_img_wrap",
    triggerHook: 'onEnter', 
    offset: 800,
    duration:200
})
.setTween(tween1_2)
.addTo(controller)

var stick1 = TweenMax.to('.tarzan .name_stick', 0.1, {
    width:0
    //x:100,
});

var scene_stick1 = new ScrollMagic.Scene({
    triggerElement: ".con_img_wrap",
    triggerHook: 'onEnter', 
    offset: 800,
    duration:100
})
.setTween(stick1)
.addTo(controller)

var tween2_1 = TweenMax.to('.con02', 0.1, {
    top:275,
    opacity:1,
    //x:100,
});

var scene2_1 = new ScrollMagic.Scene({
    triggerElement: ".con_img_wrap",
    triggerHook: 'onEnter', 
    offset: 1000,
    duration:50

})
.setTween(tween2_1)
.addTo(controller)

var stick2 = TweenMax.to('.tina .name_stick', 0.1, {
    width:160
    //x:100,
});

var scene_stick2 = new ScrollMagic.Scene({
    triggerElement: ".con_img_wrap",
    triggerHook: 'onEnter', 
    offset: 1000,
    duration:100
})
.setTween(stick2)
.addTo(controller)


var tween2_2 = TweenMax.to('.con02', 0.1, {
    top:75,
    opacity:0,
    //x:100,
});

var scene2_2 = new ScrollMagic.Scene({
    triggerElement: ".con_img_wrap",
    triggerHook: 'onEnter', 
    offset: 1300
})
.setTween(tween2_2)
.addTo(controller)

var stick2_2 = TweenMax.to('.tina .name_stick', 0.1, {
    width:0
    //x:100,
});

var scene_stick2_2 = new ScrollMagic.Scene({
    triggerElement: ".con_img_wrap",
    triggerHook: 'onEnter', 
    offset: 1300,
    duration:100
})
.setTween(stick2_2)
.addTo(controller)


var tween3_1 = TweenMax.to('.con03', 0.1, {
    top:800,
    opacity:1,
    //x:100,
});

var scene3_1 = new ScrollMagic.Scene({
    triggerElement: ".con_img_wrap",
    triggerHook: 'onEnter', 
    offset: 1500,
    duration:100

})
.setTween(tween3_1)
.addTo(controller)

var stick3_1 = TweenMax.to('.yeji .name_stick', 0.1, {
    width:140
    //x:100,
});

var scene_stick3_1 = new ScrollMagic.Scene({
    triggerElement: ".con_img_wrap",
    triggerHook: 'onEnter', 
    offset: 1500,
    duration:100
})
.setTween(stick3_1)
.addTo(controller)



var tween3_2 = TweenMax.to('.con03', 0.1, {
    top:500,
    opacity:0,
    //x:100,
});

var scene3_2 = new ScrollMagic.Scene({
    triggerElement: ".con_img_wrap",
    triggerHook: 'onEnter', 
    offset: 1800
})
.setTween(tween3_2)
.addTo(controller)

var stick3_2 = TweenMax.to('.yeji .name_stick', 0.1, {
    width:0
    //x:100,
});

var scene_stick3_2 = new ScrollMagic.Scene({
    triggerElement: ".con_img_wrap",
    triggerHook: 'onEnter', 
    offset: 1800,
    duration:100
})
.setTween(stick3_2)
.addTo(controller)




var tween4_1 = TweenMax.to('.con04', 0.1, {
    top:1600,
    opacity:1,
    //x:100,
});

var scene4_1 = new ScrollMagic.Scene({
    triggerElement: ".con_img_wrap",
    triggerHook: 'onEnter', 
    offset: 2200,
    duration:100

})
.setTween(tween4_1)
.addTo(controller)

var stick4_1 = TweenMax.to('.yumeki .name_stick', 0.1, {
    width:155
    //x:100,
});

var scene_stick4_1 = new ScrollMagic.Scene({
    triggerElement: ".con_img_wrap",
    triggerHook: 'onEnter', 
    offset: 2100,
    duration:100
})
.setTween(stick4_1)
.addTo(controller)


var tween4_2 = TweenMax.to('.con04', 0.1, {
    top:900,
    opacity:0,
    //x:100,
});

var scene4_2 = new ScrollMagic.Scene({
    triggerElement: ".con_img_wrap",
    triggerHook: 'onEnter', 
    offset: 2750,
    duration:200
})
.setTween(tween4_2)
.addTo(controller)

var stick4_2 = TweenMax.to('.yumeki .name_stick', 0.1, {
    width:0
    //x:100,
});

var scene_stick4_2 = new ScrollMagic.Scene({
    triggerElement: ".con_img_wrap",
    triggerHook: 'onEnter', 
    offset: 2500,
    duration:100
})
.setTween(stick4_2)
.addTo(controller)


//questions all bg
var tween_all_bg = TweenMax.to('.all_bg', 0.2, {
    visibility:'visible',
    opacity: 1,
});

var scene = new ScrollMagic.Scene({
    triggerElement: ".questions",
    duration: "10%",
    offset:-150,
})
.setTween(tween_all_bg)
.addTo(controller)

var tween_q_section = TweenMax.to('.questions #scroll-section-3', 0.5, {
    color: '#ffffff'
});

var scene_q = new ScrollMagic.Scene({
    triggerElement: ".questions",
    duration: "100%",
    offset:-150,
})
.setTween(tween_q_section)
.addTo(controller)

var tween_q_line = TweenMax.to('.qna_list ul li', 0.5, {
    borderBottom: "2px solid #ffffff"
});

var scene_q_line = new ScrollMagic.Scene({
    triggerElement: ".questions",
    duration: "100%",
    offset:-150,
})
.setTween(tween_q_line)
.addTo(controller)

})

AOS.init();

// const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

// tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
// tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
// tl.to(".intro", { y: "-100%", duration: 1}, "-=1");
// tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
// tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");