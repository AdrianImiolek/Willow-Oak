const burgerBtn = document.querySelector(".nav__hamburger");
const burgerBtnIcon = document.querySelector(".bx-menu-alt-right");
const navContainerLinks = document.querySelector(".nav__container--links");
const allNavLinks = document.querySelectorAll(".nav__link");

const menuToggle = () => {
	navContainerLinks.classList.toggle("nav__container--active");

	if (burgerBtnIcon.classList.contains("bx-menu-alt-right")) {
		burgerBtnIcon.classList.replace("bx-menu-alt-right", "bx-menu");
	} else {
		burgerBtnIcon.classList.replace("bx-menu", "bx-menu-alt-right");
	}

	allNavLinks.forEach((item) => {
		item.addEventListener("click", () => {
			navContainerLinks.classList.remove("nav__container--active");
		});
	});
};

burgerBtn.addEventListener("click", menuToggle);

// DATE FOOTER
const footerDate = document.querySelector(".footer__date");

function setFooterDate() {
	const currentDate = new Date();
	footerDate.innerHTML = currentDate.getFullYear();
}
setFooterDate();
