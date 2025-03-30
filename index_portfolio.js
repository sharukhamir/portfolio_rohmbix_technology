/*document.getElementById('home_nav_link').addEventListener('click', function(event){
	event.preventDefault();
	document.getElementById('home_page').style.display = 'block';
	document.getElementById('aboutme_page').style.display = 'none';
});
document.getElementById('about_nav_link').addEventListener('click', function(event){
	event.preventDefault();
	document.getElementById('home_page').style.display = 'none';
	document.getElementById('aboutme_page').style.display = 'block';
})*/
/*document.getElementById('home_page').addEventListener('click', function(event){
	event.preventDefault();
	document.getElementById('aboutme_page').style.display = 'block';
})*/


function home_page(){
	document.getElementById('main_contain').style.display = 'block';
	document.getElementById('aboutme_page').style.display = 'none';
	document.getElementById('portfolio_page').style.display = 'none';
	document.getElementById('experience_page').style.display = 'none';
	document.getElementById('contact_page').style.display = 'none';
}

function about_page(){
	document.getElementById('aboutme_page').style.display = 'block';
	document.getElementById('main_contain').style.display = 'none';
	document.getElementById('portfolio_page').style.display = 'none';
	document.getElementById('experience_page').style.display = 'none';
	document.getElementById('contact_page').style.display = 'none';
}

function portfolio_page(){
	document.getElementById('portfolio_page').style.display = 'block';
	document.getElementById('main_contain').style.display = 'none';
	document.getElementById('aboutme_page').style.display = 'none';
	document.getElementById('experience_page').style.display = 'none';
	document.getElementById('contact_page').style.display = 'none';
}

function experience_page(){
	document.getElementById('experience_page').style.display = 'block';
	document.getElementById('main_contain').style.display = 'none';
	document.getElementById('aboutme_page').style.display = 'none';
	document.getElementById('portfolio_page').style.display = 'none';
	document.getElementById('contact_page').style.display = 'none';
}

function contactme_page(){
	document.getElementById('contact_page').style.display = 'block';
	document.getElementById('main_contain').style.display = 'none';
	document.getElementById('aboutme_page').style.display = 'none';
	document.getElementById('portfolio_page').style.display = 'none';
	document.getElementById('experience_page').style.display = 'none';
}
