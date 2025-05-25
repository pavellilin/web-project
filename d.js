document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });

    // Переключение фильтров
    const filterButtons = document.querySelectorAll('.filter-tabs button');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
        });
    });

    // Лайки и сохранение
    const likeButtons = document.querySelectorAll('.project-actions button:first-child');
    const saveButtons = document.querySelectorAll('.project-actions button:last-child');
    
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i');
            const count = parseInt(this.textContent) || 0;
            
            if (icon.classList.contains('fas')) {
                icon.classList.replace('fas', 'far');
                this.textContent = ` ${count - 1}`;
            } else {
                icon.classList.replace('far', 'fas');
                this.textContent = ` ${count + 1}`;
            }
        });
    });
    
    saveButtons.forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i');
            icon.classList.toggle('far');
            icon.classList.toggle('fas');
        });
    });
});