const names = ["Manthan", "a Developer", "a Learner"];
let index = 0;
const nameSpan = document.getElementById('nameSpan');

function typeEffect() {
    const text = names[index];
    let i = 0;
    const interval = setInterval(() => {
        nameSpan.textContent += text[i];
        i++;
        if (i > text.length - 1) {
            clearInterval(interval);
            setTimeout(eraseEffect, 1000); // Wait before erasing
        }
    }, 200);
}

function eraseEffect() {
    const text = nameSpan.textContent;
    let i = text.length - 1;
    const interval = setInterval(() => {
        nameSpan.textContent = text.substring(0, i);
        i--;
        if (i < 0) {
            clearInterval(interval);
            index = (index + 1) % names.length; // Move to next name
            setTimeout(typeEffect, 500); // Wait before typing again
        }
    }, 100);
}

// Initial call to start typing effect
typeEffect();
