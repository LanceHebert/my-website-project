// const h2 = document.createElement("h2");
// h2.textContent = "This content added by JavaScript";

// document.querySelector("body").appendChild(h2);

const aiPic = document.getElementById("thumbnail-pic");

function hover(element) {
	aiPic.setAttribute(
		"src",
		"https://cdn-icons-png.flaticon.com/512/4529/4529976.png"
	);
}

function unhover(element) {
	aiPic.setAttribute(
		"src",
		"https://cdn-icons-png.flaticon.com/512/4529/4529980.png"
	);
}

function clicked(element) {}

aiPic.addEventListener("mouseover", hover);
aiPic.addEventListener("click", clicked);
aiPic.addEventListener("mouseout", unhover);

const aiPic2 = document.getElementById("thumbnail-pic2");

function hover2(element) {
	aiPic2.setAttribute(
		"src",
		"https://cdn-icons-png.flaticon.com/512/4529/4529989.png"
	);
}

function unhover2(element) {
	aiPic2.setAttribute(
		"src",
		"https://cdn-icons-png.flaticon.com/512/4529/4529992.png"
	);
}

function clicked2(element) {}

aiPic2.addEventListener("mouseover", hover2);
aiPic2.addEventListener("click", clicked2);
aiPic2.addEventListener("mouseout", unhover2);
