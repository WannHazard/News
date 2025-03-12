// Funcionalidad para el portafolio
document.addEventListener('DOMContentLoaded', function() {
    // Filtros de portafolio
    const filters = document.querySelectorAll('.portfolio-filter');
    const items = document.querySelectorAll('.portfolio-item');
    
    // Activar filtros
    filters.forEach(filter => {
        filter.addEventListener('click', function() {
            // Remover clase activa de todos los filtros
            filters.forEach(f => f.classList.remove('active'));
            
            // Añadir clase activa al filtro seleccionado
            this.classList.add('active');
            
            // Obtener categoría seleccionada
            const selectedCategory = this.getAttribute('data-filter');
            
            // Filtrar proyectos
            items.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (selectedCategory === 'all' || selectedCategory === itemCategory) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Animación al hacer scroll
    const animateOnScroll = function() {
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        portfolioItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (itemPosition < screenPosition) {
                item.classList.add('animate');
            }
        });
    };
    
    // Ejecutar animación al cargar la página
    animateOnScroll();
    
    // Ejecutar animación al hacer scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Efecto hover mejorado para los proyectos
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const overlay = this.querySelector('.portfolio-overlay');
            overlay.style.transform = 'translateY(0)';
        });
        
        item.addEventListener('mouseleave', function() {
            const overlay = this.querySelector('.portfolio-overlay');
            overlay.style.transform = 'translateY(10px)';
        });
    });
});