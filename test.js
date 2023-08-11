import $ from 'jquery';
import { gsap } from "gsap";
//scss modules
import './sass/style.scss';

import { createApp } from 'vue'
// import  App from 'src/app.vue';


// createApp({
//   data() {
//     return {
//       count: 0
//     }
//   }
// }).mount('#app')


// ========  ++++++++  =======
const x = 'webpack start';
console.log(x);

//  背景色
$('body').css('background-color', '#202020');


//動畫

const tl  = gsap.timeline();

tl.to('.box' , {
    x: 400,
    y: 500,
    duration: 6,
    ease: "bounce.out"
}).to('.box' , {
    rotation: 360,
    // repeat: -1,
    duration: 3
}).to('.box', {
     x: 0,
     y: 0,
     duration: 2
}).to('.box2' , {
     backgroundColor: "red" 
})


//gsap.to('.box', { x : 600 , y : 400 , duration:10} )
