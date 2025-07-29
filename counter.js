
document.addEventListener('DOMContentLoaded', function() {
    let timeLeft = 4 * 3600; 

    function updateCountdown() {
        const hours = Math.floor(timeLeft / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = timeLeft % 60;

        
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

        
        if (timeLeft > 0) {
            timeLeft--;
        } else {
            timeLeft = 4 * 3600; 
        }
    }

   
    updateCountdown();
    
   
    setInterval(updateCountdown, 1000); 
});