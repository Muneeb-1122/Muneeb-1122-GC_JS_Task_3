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
