document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.merto-header-sticky');
    const nav = document.querySelector('nav');
    const contactSection = document.querySelector('.contact-us-section');
    
   
    if (!header || !contactSection) {
        console.error('Header or contact section not found');
        return;
    }
    
    
    const headerHeight = header.offsetHeight;
    const navHeight = nav ? nav.offsetHeight : 0;
    const totalHeaderHeight = headerHeight + navHeight;
    
    function handleScroll() {
        const contactSectionTop = contactSection.offsetTop;
        const contactSectionHeight = contactSection.offsetHeight;
        const currentScrollY = window.scrollY;
        
      
        const contactSectionMiddle = contactSectionTop + (contactSectionHeight / 2);
        
        
        const triggerPoint = contactSectionMiddle - (window.innerHeight / 2);
        
       
        if (currentScrollY >= triggerPoint) {
            
            if (!header.classList.contains('fixed-mode')) {
                header.classList.add('fixed-mode');
                if (nav) nav.classList.add('fixed-mode');
                document.body.classList.add('header-fixed-active');
                
            
                const spacer = document.createElement('div');
                spacer.className = 'header-spacer';
                spacer.style.height = totalHeaderHeight + 'px';
                header.parentNode.insertBefore(spacer, header);
            }
        } else {
           
            if (header.classList.contains('fixed-mode')) {
                header.classList.remove('fixed-mode');
                if (nav) nav.classList.remove('fixed-mode');
                document.body.classList.remove('header-fixed-active');
                

                const spacer = document.querySelector('.header-spacer');
                if (spacer) {
                    spacer.remove();
                }
            }
        }
    }
    
   
    let ticking = false;
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(handleScroll);
            ticking = true;
            setTimeout(() => { ticking = false; }, 16); 
        }
    }
    
    window.addEventListener('scroll', requestTick);
    
    
    handleScroll();
});

