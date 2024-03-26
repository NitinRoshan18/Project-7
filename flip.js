document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const images = document.querySelectorAll('.slider img');
    const bullets = document.querySelectorAll('.bullet');
  
    let counter = 0;
    const intervalTime = 4000; // Change slide every 4 seconds
  
    // Function to move to a specific slide
    function moveToSlide(index) {
      slider.style.transform = `translateX(${-index * 100}%)`;
      updateBullets(index);
    }
  
    // Function to update bullets
    function updateBullets(index) {
      bullets.forEach((bullet, i) => {
        if (i === index) {
          bullet.classList.add('active');
        } else {
          bullet.classList.remove('active');
        }
      });
    }
  
    // Function to move to the next slide
    function nextSlide() {
      counter++;
      if (counter >= images.length) {
        counter = 0;
      }
      moveToSlide(counter);
    }
  
    
    setInterval(nextSlide, intervalTime);
  
    
    bullets.forEach((bullet, index) => {
      bullet.addEventListener('click', () => {
        counter = index;
        moveToSlide(counter);
      });
    });
  });
  