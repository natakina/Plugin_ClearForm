
class ClearForm{
	constructor(elems) {
		this.elems = elems;
	}

	cleanMethod(position = "right") {
		this.position = position;

		for (let elem of this.elems) {
			if (position == "right") {
				elem.style.right = "3%";
				elem.previousElementSibling.style.paddingRight = "9%";
			} else {
				elem.style.left = "3%";
				elem.previousElementSibling.style.paddingLeft = "9%";
			}

			elem.onclick = () => {
				elem.previousElementSibling.value = '';
				elem.style.display = "none";
			}
		}	

		let inputs = document.querySelectorAll(".input");

		for (let input of inputs) {
			input.onkeyup = () => {
				input.nextElementSibling.style.display = "block";
			}
		}
	}
}
