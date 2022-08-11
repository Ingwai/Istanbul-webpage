const title = document.querySelectorAll('.title path');

title.forEach((letter, index) => console.log(`letter of ${index} is ${letter.getTotalLength()}`));

const firstBg = document.querySelector('.first-bg');

function opacity(timeAnim) {
	setInterval(() => {
		firstBg.classList.toggle('bg-opacity');
		firstBg.style.transition = 'opacity 3s';
	}, timeAnim * 1000);
}

opacity(15);
