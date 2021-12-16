var navToggle = document.getElementsByClassName("nav-toggle")[0];
navToggle.addEventListener("click", () => {
	var navLinks = document.getElementsByTagName('nav');
	var humb = document.querySelector('.humburger');
	
	navLinks[0].classList.toggle("hide");
	humb.classList.toggle("clicked");
})

var navLinks = document.querySelectorAll('nav li a');
var span = document.createElement('span');
span.classList.add('active-page');
for (let lin of navLinks){
	lin.addEventListener("mouseenter", () => {
		if (lin.childNodes.length != 2){
			lin.appendChild(span);
		}
	})
	
	lin.addEventListener("mouseout", () => {
		if (lin.contains(span)){
			lin.removeChild(span);
		}
		
	})	
}

var myworks = document.getElementsByClassName("button-myworks");
var path = window.location.pathname;
var page = path. split("/").pop();
for (let i of myworks){
	i.addEventListener("click", () => {
		if (page == "index.html")
			location.href = "html/projects.html";
		else
			location.href = "../html/projects.html";
	});
}

var hiremes = document.getElementsByClassName("button-hire-me");
for (let i of hiremes){
	i.addEventListener("click", () => {
		if (page == "index.html")
			location.href = "html/contactme.html";
		else
			location.href = "../html/contactme.html";
	});
}


var github_links = document.getElementsByClassName("github-link");

for (let i of github_links){
	
	i.addEventListener("click", () => {
		location.href = i.getAttribute("href");
	});
	
}

var downloadResume = document.getElementById('button-download-resume');
if (downloadResume != null || downloadResume != undefined){
	downloadResume.addEventListener("click", () => {
		var downloader = document.createElement('a');
		downloader.setAttribute('href', 'data:text/plain;charset=utf-8, ' + encodeURIComponent('../documents'));
		downloader.setAttribute('download', 'Bisrat\'s Resume.pdf');
		
		document.body.appendChild(downloader);
		downloader.click();
		document.body.removeChild(downloader);
		
	});
}

let greeting = document.querySelector(".intro-discription h1 span#notname");
let name = document.querySelector('.intro-discription h1 span#name');

let greeting_text = "Hi, I am";
let name_text = "Bisrat Walle";

let printSlice = function (i, st, st_text, m) {
	setTimeout(function() {
		st.innerHTML = st_text.slice(0, i+1);
	}, i*m); 
}

if (greeting != null || greeting != undefined){
	
	for (let i = 0; i < greeting_text.length; i++){
		
		printSlice(i, greeting, greeting_text, 300);
		
	}
	
}

if (name != null || name != undefined){
	setTimeout(() => {	
		for (let i = 0; i < name_text.length; i++){
			printSlice(i, name, name_text, 200)
		}
	}, 3000)

}

var average = document.getElementById('average-progress');
var progresses = document.querySelectorAll('tr td:nth-child(3)')
if (average != null && average != undefined){
	let sum = 0, counter =0;
	for (let i of progresses){
		sum += parseFloat(i.innerHTML)
		counter += 1
	}
	average.innerHTML = "("+(sum/counter).toFixed(2) + "%)";
}

