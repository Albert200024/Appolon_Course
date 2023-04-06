$(document).ready(function (){
  $(".show_btn_menu").click(function (){
       $(".menu").css("display", "block")
  })

   $(".close_menu").click(function (){
       $(".menu").fadeOut(300)
   })

   $(".show_btn_contact").click(function(){
      $(".contact").css("display", "block")
   })

   $(".close_contact").click(function(){
      $(".contact").fadeOut(300)
   })
});