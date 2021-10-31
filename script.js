const aiPic = document.getElementById("thumbnail-pic");
const divbox3 = document.querySelector("#container-info > div:nth-child(3)");

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

		divbox3.style.zIndex = "600";
	} else {
		aiPic.style.left = "-20%";

		divbox3.style.zIndex = "-5";
	}
}

aiPic.addEventListener("mouseover", hover);
aiPic.addEventListener("click", clicked);
aiPic.addEventListener("mouseout", unhover);

//Pic 2 hover and unhover
const brainPic = document.querySelector("#thumbnail-pic2");
const divbox2 = document.querySelector("#container-info > div:nth-child(2)");

function hover2(element) {
	brainPic.setAttribute(
		"src",
		"https://cdn-icons-png.flaticon.com/512/4529/4529989.png"
	);
}

function unhover2(element) {
	brainPic.setAttribute(
		"src",
		"https://cdn-icons-png.flaticon.com/512/4529/4529992.png"
	);
}

// On click interactivity with thumbnail pic2

function clicked2(element) {
	if (brainPic.style.left === "90%") {
		brainPic.style.left = "10%";

		divbox2.style.zIndex = "500";
	} else {
		brainPic.style.left = "90%";
		divbox2.style.zIndex = "-1";
	}
}

aiPic2.addEventListener("mouseover", hover2);
aiPic2.addEventListener("click", clicked2);
aiPic2.addEventListener("mouseout", unhover2);
