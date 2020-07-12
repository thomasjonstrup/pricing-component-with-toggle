function toggleAnually(box, checkboxID) {
	var checkbox = document.getElementById(checkboxID);

	var boxes = document.querySelectorAll(box);

	checkbox.onclick = function() {
		boxes.forEach(box => {
			if (this.checked) {
				var hasClass = box.classList.contains("monthly");

				box.style["display"] = hasClass ? "block" : "none";
			} else {
				var hasClass = box.classList.contains("annually");

				box.style["display"] = hasClass ? "block" : "none";
			}
		});
	};
}

window.onload = function() {
	toggleAnually(".price", "toggle_pricing1");
};
