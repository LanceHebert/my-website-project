// const h2 = document.createElement("h2");
// h2.textContent = "This content added by JavaScript";

// document.querySelector("body").appendChild(h2);

const aiPic = document.getElementById("thumbnail-pic");
const aiLi1 = document.querySelector(
	"#container-info > div:nth-child(3) > ul > li:nth-child(1)"
);
const aiLi2 = document.querySelector(
	"#container-info > div:nth-child(3) > ul > li:nth-child(2)"
);
const aiLi3 = document.querySelector(
	"#container-info > div:nth-child(3) > ul > li:nth-child(3)"
);
const aiLi4 = document.querySelector(
	"#container-info > div:nth-child(3) > ul > li:nth-child(4)"
);
const aiLi5 = document.querySelector(
	"#container-info > div:nth-child(3) > ul > li:nth-child(6)"
);
const aiLi6 = document.querySelector(
	"#container-info > div:nth-child(3) > ul > li:nth-child(7)"
);

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

//click functionality for AI pic
function clicked(element) {
	if (aiPic.style.left === "-20%") {
		aiPic.style.left = "60%";
		aiLi1.style.zIndex = "600";
		aiLi2.style.zIndex = "600";
		aiLi3.style.zIndex = "600";
		aiLi4.style.zIndex = "600";
		aiLi5.style.zIndex = "600";
		aiLi6.style.zIndex = "600";
	} else {
		aiPic.style.left = "-20%";
		aiLi1.style.zIndex = "-5";
		aiLi2.style.zIndex = "-5";
		aiLi3.style.zIndex = "-5";
		aiLi4.style.zIndex = "-5";
		aiLi5.style.zIndex = "-5";
		aiLi6.style.zIndex = "-5";
	}
}

aiPic.addEventListener("mouseover", hover);
aiPic.addEventListener("click", clicked);
aiPic.addEventListener("mouseout", unhover);

//Pic 2 hover and unhover

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

// On click interactivity with thumbnail pic2

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
		eduLi1.style.zIndex = "500";
		eduLi2.style.zIndex = "500";
		eduLi3.style.zIndex = "500";
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
