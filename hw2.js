/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    'use strict';
	//console.log('1');
	//alert(1);
})
$("#IG_4,#IG_5,#IG_6,#Div5").hover(function () {
    'use strict';
    $(this).toggleClass('Button_Transparent');
    
})
var myswp=new Swiper('.swiper-container',{
    //loop:true,
    autoplay:{
        disableOnInteraction:false,
        delay:5000,
    },
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
        
    },
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },

    

})


