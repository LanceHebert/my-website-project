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
