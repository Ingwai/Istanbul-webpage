const title = document.querySelectorAll('.title path');

title.forEach((letter, index) => console.log(`letter of ${index} is ${letter.getTotalLength()}`));

const firstBg = document.querySelector('.header__bg-1');

function opacity(timeAnim) {
	setInterval(() => {
		firstBg.classList.toggle('header__bg-opacity');
		firstBg.style.transition = 'opacity 3s';
	}, timeAnim * 1000);
}

opacity(12);
