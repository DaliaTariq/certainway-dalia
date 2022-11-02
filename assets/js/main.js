$(document).ready(function () {
   
    
  new WOW().init();


  /*********************************************************************************/
  $('#slide-testimonal').owlCarousel({
    rtl:true,
    autoplay:true,
    margin: 0,
    center: true,
    loop: true,
    nav: true,
    responsive: {
    0: {
       items: 1
    },
    768: {
       items: 3,
    margin: 15,
    },
    1000: {
       items: 3,
    }
      }
  });

  /*****************************Counter down*******************************************/
  (function () {
   const second = 1000,
         minute = second * 60,
         hour = minute * 60,
         day = hour * 24;
 
   //I'm adding this section so I don't have to keep updating this pen every year :-)
   //remove this if you don't need it
   let today = new Date(),
       dd = String(today.getDate()).padStart(2, "0"),
       mm = String(today.getMonth() + 1).padStart(2, "0"),
       yyyy = today.getFullYear(),
       nextYear = yyyy + 1,
       dayMonth = "09/30/",
       birthday = dayMonth + yyyy;
   
   today = mm + "/" + dd + "/" + yyyy;
   if (today > birthday) {
     birthday = dayMonth + nextYear;
   }
   //end
   
   const countDown = new Date(birthday).getTime(),
       x = setInterval(function() {    
 
         const now = new Date().getTime(),
               distance = countDown - now;
 
         document.getElementById("days").innerText = Math.floor(distance / (day)),
           document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
           document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
           document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
 
         //do something later when date is reached
         if (distance < 0) {
           document.getElementById("headline").innerText = "It's my birthday!";
           document.getElementById("countdown").style.display = "none";
           document.getElementById("content").style.display = "block";
           clearInterval(x);
         }
         //seconds
       }, 0)
   }());

   /*********************Back to top***********************/
   var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

/********************************************************************/



});