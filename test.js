import $ from 'jquery';
import { gsap } from "gsap";

const x = 'webpack start';
console.log(x);

//  被景色
$('body').css('background-color' , '#202020');


//動畫
gsap.to('.box' , {
 x : 400,
 y : 500,
 duration: 3
})
