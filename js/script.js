const title = document.querySelectorAll('.title path');

title.forEach((letter, index) => console.log(`letter of ${index} is ${letter.getTotalLength()}`));
