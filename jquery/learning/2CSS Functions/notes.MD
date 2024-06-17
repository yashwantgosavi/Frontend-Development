$('para1').html('welcome');
$('para1').hide();
$('para').width();
$('para').height();
$('p').html('holla!');
// for featching jquery object
var p1 = paras.eq(0);
// for DOM object
var p1 = paras.eq[0];


// =========== CSS Functions =========
$('#para1').css('color','red');
$('#para1').css('fontSize','30px');
$('#para1').css({
  fontSize:'30px',
  color:'red'
});


// =========== Event Handeling ==========

$('.div').click(function(){
alert('Div Clicked');
});


$('div').on('click', function(){
  alert("div Clicked");
});

$('a').on('click', function(event){
  event.preventDefault();
  alert("anchor tag Clicked");
})


$('div').on('click', function(){
  var element = $(this);
  element.width(element.width()+10+'px');
  alert("div Clicked");
});