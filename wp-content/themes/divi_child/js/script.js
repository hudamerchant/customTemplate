$(window).on('load',function(){
	setTimeout(function(){ $('.loader').fadeOut('slow') }, 100);

})
$('.parent-slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
});

$('.slick-prev').append('<div class="next-slick-img slick-thumb-nav"><img src="images/index/slider-arrow1.png" class="img-responsive"></div>');

$('.slick-next').append('<div class="next-slick-img slick-thumb-nav"><img src="images/index/slider-arrow2.png" class="img-responsive"></div>');

$('.more').click(function(){
	$('.more-nav1').toggle();
	event.preventDefault();
})

// $('.div1-content-more').click(function(){
// 	$('.div1-content1').fadeIn();
// })
$(document).ready(function(){
  $('.div1-content-more').click(function(){
    $('.div1-content1').slideToggle();
    
    event.preventDefault();
  });
});

var datalist = [
					{
						"to":"Lahore",
					    "location":"Lahore.Pakistan",
					     "price":"22,99",
					    "time":"18:15 GMT+2",
					    "weather":"Rainy,7.c",
					    "Flights":"+315 flights",
					    "hotels":"+72 Hotels"
					},
				    
					{
						"to":"Islamabad",
					    "location":"Islamabad.Pakistan",
					    "price":"78,99",
					    "time":"7:15 GMT+2",
					    "weather":"Sunny,7.c",
					    "Flights":"+65 flights",
					    "hotels":"+100 Hotels"
					},
					{
						"to":"Sukker",
					    "location":"Sukker.Pakistan",
					    "price":"699",
					    "time":"13:15 GMT+2",
					    "weather":"Cold,4.c",
					    "Flights":"+40 flights",
					    "hotels":"+20 Hotels"
					},
					{
						"to":"Karachi",
					    "location":"Karachi.Pakistan",
					    "price":"49,40",
					    "time":"12:15 GMT+2",
					    "weather":"Hot,41.c",
					    "Flights":"+30 flights",
					    "hotels":"+10 Hotels"
					},
					{
						"to":"London",
					    "location":"London.UK",
					    "price":"60,40",
					    "time":"4:15 GMT+2",
					    "weather":"Cold,41.c",
					    "Flights":"+30 flights",
					    "hotels":"+10 Hotels"
					},
					{
						"to":"London",
					    "location":"London.UK",
					    "price":"60,40",
					    "time":"4:15 GMT+2",
					    "weather":"Cold,41.c",
					    "Flights":"+30 flights",
					    "hotels":"+10 Hotels"
					},
					{
						"to":"Toronto",
					    "location":"Toronto.Canada",
					    "price":"37,40",
					    "time":"5:15 GMT+2",
					    "weather":"Cold,41.c",
					    "Flights":"+4 flights",
					    "hotels":"+8 Hotels"
					}

				]
$('.button').click(function(){

	var togo = $('#to').val();
	datalist.forEach(function(e){
		if(togo == e.to){
			$('.result-form').html('<h1><span>'+e.to+'</span> flights for '+e.price+'&#8946 </h1><p>Hurry to take advantage of the limited number of tickets !</p><div><div><img src="images/index/place.png"><p>'+e.location+'</p></div><div><img src="images/index/timezone.png"><p>'+e.time+'</p></div><div><img src="images/index/rain.png"><p>'+e.weather+'</p></div><div><img src="images/index/flight.png"><p>'+e.Flights+'</p></div><div><img src="images/index/hotel.png"><p>'+e.hotels+'</p></div></div>');
			$('.result-form').fadeIn();
			
			event.preventDefault();
		}
		
	})
}) 

$("#myform").validate({
	errorClass: 'error',
	rules:{
		
		from1:{
			required: true,
			
		},
		flights:{
			required: true,
		},
		to1:{
			required: true,
		},
		date1:{
			required: true,
			autoclose: true,
			
		},
		date2:{
			required: true,
			autoclose: true,
		},
		cabin:{
			required: true,
		}
	},
	messages:{
		flights:"Select Flight",
		from1:"From Where You Are",
		to1:"Where you want to go",
		date1:"When you will Depart",
		date2:"When you will Return",
		cabin:"What cabin you would like",
	}
});


$( function() {
    $( ".datepicker" ).datepicker({
        format: "dd/mm/yyyy",
        
    })
});

// AsmaWork
$(function(){
    $('.main-nav-exchange ul li').click(function(){
    var elementClass = $(this).attr("class");
    $('.parent-filtering-div').hide();
       $('.'+elementClass).show();
       event.preventDefault();
  });
});
$('.flight-button').click(function(){
	$(".flight-main-form").validate({
		errorClass: 'error',
		rules:{
		
			from:{
			required: true,
			lettersonly:true,
			
			},
			to:{
			required: true,
			lettersonly:true,
			},
			return:{
				required: true,
			},
			depart:{
				required: true,
				
			},
			passenger:{
				required: true,
				digits:true,
			}
		},
		messages:{

			from:"From Where You Are",
			to:"Where you want to go",
			return:"When you will Return",
			depart:"When you will Depart",
			passenger:"How Many Passenger",
		},
		submitHandler:function(){
		Swal.fire('Ticket Booked')
	}
});
});


jQuery.validator.addMethod("lettersonly", function(value, element) 
{
return this.optional(element) || /^[a-z ]+$/i.test(value);
}, "Letters and spaces only please");

jQuery.validator.addMethod("digits", function(value, element) 
{
return this.optional(element) || /^[ 0-9+-]+$/i.test(value);
}, "Digits and plus minus only please");


$('.carhire-button').click(function(){
	$(".carhire-form").validate({
		errorClass: 'error',
		rules:{
		
			name:{
			required: true,
			lettersonly:true,
			
			},
			city:{
			required: true,
			lettersonly:true,
			},
			country:{
				required: true,
				lettersonly:true,
			},
			date:{
				required:true,
			},
			carhireselect:{
				required: true,
			},
			
		},
		messages:{

			name:"Enter your Name",
			city:"Enter City",
			country:"Enter country",
			carhireselect:"Enter Car you want to hire",
		},
		submitHandler:function(){
		Swal.fire('Your Car Has Been Hired')
	}
});
});

// help
var action = 'click';

$(document).ready(function(){
	$('.faq-content-div').on(action, function(){
		$(this).find($(".para-faq")).slideToggle();
		$(this).find($(".fa")).toggleClass('fa-rotate-90');
	});
	
});
$('.message-button').click(function(){
	$("#contact-form").validate({
		errorClass: 'error',
		rules:{
		
			name:{
			required: true,
			lettersonly:true,
			
			},
			email:{
			required: true,
			},
			message:{
				required: true,
				lettersonly:true,
			},
			
			
		},
		messages:{

			name:"Enter your Name",
			email:"Enter Email",
			message:"Write your message",
		},
		submitHandler:function(){
		Swal.fire('Thank you , We will contact you soon')
	}
});
});


// help

// flight
$('.category-flights').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding:'0px',
        focusOnSelect: true,
        infinite:true,
        centerMode:true,
        prevArrow:'<span class="leftarrow"> <i class="fa fa-angle-left"> </i> </span>',
        nextArrow:'<span class=rightarrow> <i class="fa fa-angle-right"> </i> </span>',
});

$('.head-bottom').slick({
        infinite:true,
        fade:true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4500,
        cssEase:'linear',
       
		
        prevArrow:'<span class="leftarrow"> <i class="fa fa-angle-left"> </i> </span>',
        nextArrow:'<span class=rightarrow> <i class="fa fa-angle-right"> </i> </span>', 
    });

    $('[data-fancybox]').fancybox({
        animationEffect: "zoom",
        loop: true,
        buttons: [
            "zoom",
            "share",
            "fullScreen",
            "download",
            "slideShow",
            "thumbs",
            "close"
          ],
          transitionEffect: "zoom-in-out",
    });
$(function(){
$("body").floatingSocialShare();
});


