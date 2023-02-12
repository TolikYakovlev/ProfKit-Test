//Carousel popoular
$(document).ready(function () {
	const saleCarousel = $('#slider-wrapper');
	saleCarousel.owlCarousel({
            mouseDrag: false,
            touchDrag: false,
            dots: false,
            loop: true,
            nav: true,
        navText: [
          '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 11L14 20.5L23 30" stroke="black" stroke-width="2" stroke-linecap="round"/><rect x="0.5" y="0.5" width="39" height="39" rx="4.5" stroke="#ECF0F4"/></svg>',
          '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 11L26 20.5L17 30" stroke="black" stroke-width="2" stroke-linecap="round"/><rect x="-0.5" y="0.5" width="39" height="39" rx="4.5" transform="matrix(-1 0 0 1 39 0)" stroke="#ECF0F4"/></svg>'
        ],
        responsive: {
          0:{
            items:1,
          },
          600:{
            items: 2,

          },
          900:{
            items:3,
          },
          1568:{
            items:4,
          }
        }
	});
});

//Carousel popolar_img
$(document).ready(function () {
  $('.popular__product-slider').each(function(){
    $(this).owlCarousel({
    mouseDrag: true,
    touchDrag: true,
    loop: true,
    dots: true,
		items: 1,
    nav: false,
    autoWidth: true
    });
  });
});

//product__Toggle 
function addHandlers(count) {
  let minus = count.querySelector(".popular__product-remove");
  let number = count.querySelector(".popular__product-quantity");
  let plus = count.querySelector(".popular__product-add");

  plus.addEventListener("click", function() {
      let numberPlus = number.innerHTML;
  if(+numberPlus <= 4){
    number.innerHTML++;}
  });

  minus.addEventListener("click", function() {
     let numberMinus = number.innerHTML;
  if(+numberMinus >= 2){
    number.innerHTML--;}
  });
}

let counts = document.querySelectorAll(".popular__product-toggle");
counts.forEach(addHandlers);


// Like

function selected(like) {
  let fill = like.querySelector(".like__svg");
  let stroke = like.querySelector(".like__stroke");

  like.addEventListener('click', function() {
    fill.classList.toggle('like__svg--active');
    stroke.classList.toggle('like__stroke--active');
  })
};

let like = document.querySelectorAll(".like");
like.forEach(selected);

