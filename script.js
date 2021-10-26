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
const eduList = document.getElementsByClassName("educationList");

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

const brainPic = document.querySelector("#thumbnail-pic2");
const eduLi1 = document.querySelector(
	"#container-info > div:nth-child(2) > ul > li:nth-child(1)"
);
const eduLi2 = document.querySelector(
	"#container-info > div:nth-child(2) > ul > li:nth-child(2)"
);
const eduLi3 = document.querySelector(
	"#container-info > div:nth-child(2) > ul > li:nth-child(3)"
);

function clicked2(element) {
	if (brainPic.style.left === "90%") {
		brainPic.style.left = "10%";
		eduLi1.style.zIndex = "100";
		eduLi2.style.zIndex = "100";
		eduLi3.style.zIndex = "100";
	} else {
		brainPic.style.left = "90%";
		eduLi1.style.zIndex = "-1";
		eduLi2.style.zIndex = "-1";
		eduLi3.style.zIndex = "-1";
	}
}

aiPic2.addEventListener("mouseover", hover2);
aiPic2.addEventListener("click", clicked2);
aiPic2.addEventListener("mouseout", unhover2);
