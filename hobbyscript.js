

    const slideshowContainer = document.querySelector('.slideshow-container');
    const slides = slideshowContainer.querySelectorAll('.slide');

    let slideIndex = 0;
    let timer = null;

    function showSlide(index) {

      for (let slide of slides) {
        slide.classList.remove('active');
      }

      slides[index].classList.add('active');
    }

    function nextSlide() {

      slideIndex++;

      if (slideIndex >= slides.length) {
        slideIndex = 0;
      }

      showSlide(slideIndex);
    }

    function prevSlide() {

      slideIndex--;

      if (slideIndex < 0) {
        slideIndex = slides.length - 1;
      }

      showSlide(slideIndex);
    }

    function startSlideshow() {

      timer = setInterval(nextSlide, 3000);
    }

    function stopSlideshow() {

      clearInterval(timer);
    }

    startSlideshow();

    slideshowContainer.querySelector('.prev').addEventListener('click', prevSlide);
    slideshowContainer.querySelector('.next').addEventListener('click', nextSlide);

    slideshowContainer.addEventListener('mouseenter', stopSlideshow);
    slideshowContainer.addEventListener('mouseleave', startSlideshow);
