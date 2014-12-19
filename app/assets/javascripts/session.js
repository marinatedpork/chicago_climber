var userShowBgUrl = 'http://i.imgur.com/EaHIwaG.jpg';
var navFadeIn     = {'background': 'rgba(192,192,192, .6)'};

var newNav = function(route, id, text) {
	return '<li><a href="'+route+'" id="'+id+'">'+text+'</a></li>'
};

var fadeBackground = function (url) {
	$('.container').css({'background': 'url('+url+') no-repeat center center'}).delay(1000);
};

var addUserNavBar = function(){
	var navBar      = $('.navbar-nav');
	var $feedNav    = newNav('/', 'userFeedNav','feed');
	var $routesNav  = newNav('/', 'userRoutesNav', 'routes');
	var $logoutNav  = newNav('/logout','userLogoutNav', 'logout');
	navBar.empty();
	$('nav div').removeClass('navbar-right');
	navBar.append($feedNav);
	navBar.append($routesNav);
	navBar.append($logoutNav);
};

var userShowCss =	{ 
	width: '80%',
  height: '650px',
  'margin-top': '10px',
  'margin-bottom': '10%',
  'margin-left': '10%',
  'margin-right': '10%'
};

var userShowSetup = function() {
	$('.userFormContainer').children().fadeOut(200);
	$('.userFormContainer').animate(userShowCss);
	$('nav').addClass('transluscent', 500, 'easeInBack');
	$('nav').removeClass('transparent')
	fadeBackground(userShowBgUrl);
	addUserNavBar();
  $('nav').addClass('box-shadow');
};

$(document).ready(function(){

	var userFormContainer = $('.userFormContainer');

	$('.hiddenSubmit').hide();
	$(   '#signUp'   ).hide();
	$( '.fa-spinner' ).hide();
	$(  '.fullPage'  ).hide();

	$('#showSignUp').on('click', function(){
		$('#signIn').hide();
		$('#signUp').fadeIn();
		$('.userFormContainer').animate({height: '270px'}, 'fast')
	});

	$('#showSignIn').on('click', function(){
		$('#signUp').hide();
		$('#signIn').fadeIn();
		$('.userFormContainer').animate({height: '225px'}, 'fast')
	});

// glowing interval

  $('.loadingSpinner').addGlow({
    radius: 30,
    textColor: '#ff0',
    haloColor: '#ffa',
    duration: 400
  });

  $('.fa-circle-thin').addGlow({
    radius: 30,
    textColor: '#ff0',
    haloColor: '#ffa',
    duration: 500
  });

  window.setInterval(function(){
  	$(".loadingSpinner").trigger('mouseenter')
	}, 1800);

  window.setInterval(function(){
  	$(".fa-circle-thin").trigger('mouseenter')
	}, 5000);

// signin form

	$("#signInForm").on('submit', function(event){
		event.preventDefault();
		$('.fa-circle-thin').hide();
		$('.fa-spinner').show();
  	var form = $('form:visible'),
  			url  = form.attr('action'),
	  		data = form.serialize();
	  $.post(url, data, function(serverResponse){
	  	if (serverResponse.match(/class='signInError/)) {
  		  $(serverResponse).hide().appendTo('#errorMessageArea').fadeIn();
        $('.disappear').delay( 2000 ).fadeOut();
	  	} else {
				userShowSetup();
				userFormContainer.empty();
				$(serverResponse).hide().appendTo(userFormContainer).delay(1000).fadeIn(1500);
				$('#userFeed').hide();
				$("#createForm").hide();
				$("#confirmTickList").hide();
				$("#cancelTickList").hide();
			}
		});
	});

	$("#new_user").on('submit', function(event){
		event.preventDefault();
		$('.fa-circle-thin').hide();
		$('.fa-spinner').show();
  	var form = $('form:visible'),
  			url  = form.attr('action'),
	  		data = form.serialize();
	  $.post(url, data, function(serverResponse){
	  	if (serverResponse.match(/class='signInError/)) {
  		  $(serverResponse).hide().appendTo('#errorMessageArea').fadeIn();
        $('.disappear').delay( 2000 ).fadeOut();
	  	} else {
				userShowSetup();
				userFormContainer.empty();
				$(serverResponse).hide().appendTo(userFormContainer).delay(1000).fadeIn(1500);
				$('#userFeed').hide();
				$("#createForm").hide();
				$("#confirmTickList").hide();
				$("#cancelTickList").hide();
			}
		});
	});

  $('.submitButtonDiv').on('click', function(event){
			$('form:visible').submit();
  });

});