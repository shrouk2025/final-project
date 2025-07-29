
const container = document.querySelector('.category-carousel');
const duration = 400;


function getItemWidth() {
  const firstItem = container.children[0];
  const computedStyle = window.getComputedStyle(container);
  const gap = parseFloat(computedStyle.gap) || 16;
  const itemWidth = firstItem.offsetWidth + gap;
  return itemWidth;
}

function rotateLeftSeamless() {
  const itemWidth = getItemWidth();
  const firstItem = container.children[0];
  const clone = firstItem.cloneNode(true);
  
  container.appendChild(clone);
  
  container.style.transition = `transform ${duration}ms ease`;
  container.style.transform = `translateX(-${itemWidth}px)`;
  
  setTimeout(() => {
    container.style.transition = 'none';
    container.style.transform = 'translateX(0)';
    container.removeChild(firstItem);
  }, duration);
}


if (container) {
  setInterval(rotateLeftSeamless, 3000);
}

function initializeCarousel(sectionSelector) {
  const section = document.querySelector(sectionSelector);
  if (!section) return;
  
  const flashContainer = section.querySelector('.flash-deals-container');
  const flashPrevBtn = section.querySelector('.owl-prev');
  const flashNextBtn = section.querySelector('.owl-next');
  const flashDuration = 400;
  
  let isAnimating = false;
  
  function getFlashCards() {
    return flashContainer.querySelectorAll('.flash-deals-card');
  }
  
  function getFlashItemWidth() {
    const cards = getFlashCards();
    if (cards.length === 0) return 0;
    
    const containerWidth = flashContainer.offsetWidth;
    return containerWidth * 0.2; 
  }
  
  function flashMoveToNext() {
    if (isAnimating) return;
    
    const cards = getFlashCards();
    if (cards.length === 0) return;
    
    isAnimating = true;
    const itemWidth = getFlashItemWidth();
    
  
    const firstCard = cards[0];
    const clone = firstCard.cloneNode(true);
    
    
    flashContainer.appendChild(clone);
    
    flashContainer.style.transition = `transform ${flashDuration}ms ease`;
    flashContainer.style.transform = `translateX(-${itemWidth}px)`;
    
    setTimeout(() => {
     
      flashContainer.style.transition = 'none';
      flashContainer.style.transform = 'translateX(0)';
      flashContainer.removeChild(firstCard);
      isAnimating = false;
    }, flashDuration);
  }
  
   
  function flashMoveToPrevious() {
    if (isAnimating) return;
    
    const cards = getFlashCards();
    if (cards.length === 0) return;
    
    isAnimating = true;
    const itemWidth = getFlashItemWidth();
    
    
    const lastCard = cards[cards.length - 1];
    const clone = lastCard.cloneNode(true);
    
    
    flashContainer.insertBefore(clone, cards[0]);
    
    
    flashContainer.style.transition = 'none';
    flashContainer.style.transform = `translateX(-${itemWidth}px)`;
    
    
    setTimeout(() => {
      flashContainer.style.transition = `transform ${flashDuration}ms ease`;
      flashContainer.style.transform = 'translateX(0)';
    }, 10);
    
    setTimeout(() => {
      
      flashContainer.style.transition = 'none';
      flashContainer.removeChild(lastCard);
      isAnimating = false;
    }, flashDuration);
  }
  
  
  function flashSlideNext() {
    if (isAnimating) return;
    
    const cards = getFlashCards();
    if (cards.length === 0) return;
    
    isAnimating = true;
    
   
    const firstCard = cards[0];
    flashContainer.appendChild(firstCard);
    
   
    flashContainer.style.transition = `transform ${flashDuration}ms ease`;
    flashContainer.style.transform = 'translateX(-5px)';
    
    setTimeout(() => {
      flashContainer.style.transform = 'translateX(0)';
    }, 50);
    
    setTimeout(() => {
      flashContainer.style.transition = 'none';
      isAnimating = false;
    }, flashDuration);
  }
  
  function flashSlidePrevious() {
    if (isAnimating) return;
    
    const cards = getFlashCards();
    if (cards.length === 0) return;
    
    isAnimating = true;
    
   
    const lastCard = cards[cards.length - 1];
    flashContainer.insertBefore(lastCard, cards[0]);
    
    
    flashContainer.style.transition = `transform ${flashDuration}ms ease`;
    flashContainer.style.transform = 'translateX(5px)';
    
    setTimeout(() => {
      flashContainer.style.transform = 'translateX(0)';
    }, 50);
    
    setTimeout(() => {
      flashContainer.style.transition = 'none';
      isAnimating = false;
    }, flashDuration);
  }
  
 
  if (flashNextBtn && flashPrevBtn) {
    flashNextBtn.addEventListener('click', flashMoveToNext);
    flashPrevBtn.addEventListener('click', flashMoveToPrevious);
    
    
  }
}


initializeCarousel('.flash-deals-section');
initializeCarousel('.best-sellers-section');

function updateCountdown() {
  const now = new Date().getTime();
  const endTime = now + (24 * 60 * 60 * 1000); 
  
  const timeLeft = endTime - now;
  
  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');
  
  if (hoursElement) hoursElement.textContent = hours.toString().padStart(2, '0');
  if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, '0');
  if (secondsElement) secondsElement.textContent = seconds.toString().padStart(2, '0');
}


setInterval(updateCountdown, 1000);
updateCountdown(); 