/// <reference path="../typings/globals/jquery/index.d.ts" />


/// navbar
let widthNavinner=$(".nav-inner").outerWidth();
  // console.log(widthNavinner)
$(".btnOpen").click(function(){
  let offsetnav=$(".nav").offset().left;
  // console.log(offsetnav)
  if(offsetnav==0){
    $(".nav").animate({
      left:`-${widthNavinner}px`
    },1000)  
}
  else{
    $(".nav").animate({
      left:"0px" ,
    },1000)     
  }
})
$(".nav div i").click(function(){
    $(".nav").animate({
      left:`-${widthNavinner}px` ,
    },1000) 
})



// accordion

  $(".detSinger:first").css("display","block")
  $("#accordion button").click(function(){
      $(this).next().slideToggle()
      $(".detSinger:has(p)").not($(this).next()).slideUp()
  
  })




//counter
let countdownTime = new Date("Dec 17, 2021 20:05:60 ").getTime();
  // console.log(countdownTime)

let z = setInterval(function(){
    let nowTime = new Date().getTime();
    // console.log(nowTime)

let duration = countdownTime-nowTime;
// console.log(duration)
let days = Math.floor(duration / (1000 * 60 * 60 * 24));
let hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((duration % (1000 * 60)) / 1000);

document.getElementById("day").innerText=days +" D";
document.getElementById("hour").innerText=hours + " H";
document.getElementById("min").innerText=minutes + " M";
document.getElementById("sec").innerText=seconds + " S";

if(duration <0){
  clearInterval(z,1000);
  document.getElementById("day").innerText=0 +" D";
  document.getElementById("hour").innerText=0 + " H";
  document.getElementById("min").innerText=0 + " M";
  document.getElementById("sec").innerText=0 + " S";
}
  },1000)


//counter-msg

let numMsg=document.getElementById("num-msg")
$("#message").keyup(function(){

let numChart =$(this).val().length
console.log(numChart)

 
 numMsg.innerText=100-numChart;

if(numChart>100){
  $("#num-msg").text("your available character finished ")

}
else{
  $("#num-msg").val(numMsg.innerText)
}
  
})







  


// $(window).scroll(function(){
//   let x=$("#home").height()
//   let scrollwin= $(window).scrollTop()
//   if(scrollwin>x){
//     $(".btnOpen").addClass("d-none")
//     $(".btnOpen").removeClass("d-block")
//   }
//   else{
//     $(".btnOpen").addClass("d-block")
//     $(".btnOpen").removeClass("d-none")
//   }

  
// })









