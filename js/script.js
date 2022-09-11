const title = document.querySelectorAll('.title path');
const navigation = document.querySelector('.navigation__nav');
const checked = document.querySelector('.navigation__checkbox');

navigation.addEventListener('click', () => {
		checked.checked = false;
});

title.forEach((letter, index) => console.log(`letter of ${index} is ${letter.getTotalLength()}`));

const firstBg = document.querySelector('.header__bg-1');

function opacity(timeAnim) {
	setInterval(() => {
		firstBg.classList.toggle('header__bg-opacity');
		firstBg.style.transition = 'opacity 3s';
	}, timeAnim * 1000);
}

opacity(12);
