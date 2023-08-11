import $ from 'jquery';
import { gsap } from "gsap";
//scss modules
import './sass/style.scss';


// ========  ++++++++  =======
const x = 'webpack start';
console.log(x);

//  背景色
$('body').css('background-color', '#202020');


//動畫
gsap.to('.box', {
    x: 400,
    y: 500,
    duration: 3,
    rotation: 180,
    repeat: -1,
    yoyo: true,
    //opacity: 0,
    scale: 5,
    ease: "elastic.out(1, 0.3)"
})
