document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            cards.forEach((c) => {
                c.style.borderRadius = "0"; 
            });
            card.style.borderRadius = "30px"; 
        });
    });
});


const mouse = document.getElementById('mouse');
const para = document.querySelector('.para');
const mouseHover = document.getElementById('mouse-hover');

// Hide #mouse initially
mouse.style.display = 'none';

// Show #mouse and enable movement on hover
para.addEventListener('mouseover', () => {
    mouse.style.display = 'flex';
});

// Move #mouse with cursor inside #mouse-hover

const offsetX = 65;
const offsetY = 10;

mouseHover.addEventListener("mousemove", function (e) {
    const rect = mouseHover.getBoundingClientRect(); 
    const x = e.clientX + offsetY - rect.left - mouse.offsetWidth / 2; 
    const y = e.clientY + offsetX - rect.top - mouse.offsetHeight / 2; 

    mouse.style.transform = `translate(${x}px, ${y}px)`; 
    para.style.textDecoration = 'underLine'
});


// Hide #mouse when not hovering
mouseHover.addEventListener('mouseleave', () => {
    mouse.style.display = 'none';
    para.style.textDecoration = 'none'
});