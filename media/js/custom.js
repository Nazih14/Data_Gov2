
new WOW().init();

wow = new WOW(
{
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    }
                    )
wow.init();


// $(document).ready(function () {
//             $(".check ").datepicker({
//                 showButtonPanel: true,
//                 currentText: "Today ",
//                 closeText: "Close ",
//                 constrainInput: true,
//                 minDate: 0,
//                 maxDate: "+2M ",
//                 // numberOfMonths: 2
//             });
//         });



$(document).ready(function(){
  $('.carousel[data-type="multi"] .item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<4;i++) {
      next=next.next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      
      next.children(':first-child').clone().appendTo($(this));
    }
  });
});




$(window).scroll(function(){
  var wscroll = $(this).scrollTop();
  if(wscroll > 50){
   $(".navbar").addClass("shrink-nav");
 }
 else{
  $(".navbar").removeClass("shrink-nav");
}
});