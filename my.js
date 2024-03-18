function toggleMenu() {
    var menu = document.getElementById("menu");
    var button = document.querySelector('.button2');
    menu.style.display = menu.style.display === "block" ? "none" : "block";
    button.classList.toggle('open');
  }
  
  function closeMenu() {
    var menu = document.getElementById("menu");
    var button = document.querySelector('.button2');
    menu.style.display = "none";
    button.classList.remove('open');
  }

  // Close menu when clicking outside of it
  document.addEventListener("click", function(event) {
    var menu = document.getElementById("menu");
    var button = document.querySelector('.button2');
    if (!menu.contains(event.target) && !button.contains(event.target)) {
      closeMenu();
    }
  });

  // Close menu when scrolling the page
  window.addEventListener("scroll", function() {
    closeMenu();
  });

  // bg animation
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 25, // Number of particles
        density: {
          enable: true,
          value_area: 800, // Area covered by particles
        },
      },
      color: {
        value: "#FFFFFF", // Particle color
      },
      shape: {
        type: "circle", // Particle shape
        stroke: {
          width: 0, // Particle border width
          color: "#000000", // Particle border color
        },
        polygon: {
          nb_sides: 5, // Number of sides for polygon shape
        },
      },
      opacity: {
        value: 0.5, // Particle opacity
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3, // Particle size
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 205, // Distance of connections between particles
        color: "#FFFFFF", // Color of connections
        opacity: 0.4, // Opacity of connections
        width: 1, // Width of connections
      },
      move: {
        enable: true,
        speed: 4, // Particle movement speed
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "repulse", // Particle reaction on hover
        },
        onclick: {
          enable: true,
          mode: "push", // Particle reaction on click
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 100, // Repulsion distance on hover
          duration: 0.4,
        },
        push: {
          particles_nb: 0, // Number of particles to push on click
        },
        remove: {
          particles_nb: 2, // Number of particles to remove on click
        },
      },
    },
    retina_detect: true,
  });



  //image slider

  // Get all image slides
  const slides = document.querySelectorAll('.image-slide');

  // Function to handle mouseenter event
  function handleMouseEnter(event) {
    // Remove the 'middle-slide' class from all slides
    slides.forEach(slide => {
      slide.classList.remove('middle-slide');
    });
    // Add the 'middle-slide' class to the hovered slide
    event.currentTarget.classList.add('middle-slide');
  }

  // Add mouseenter event listener to each slide
  slides.forEach(slide => {
    slide.addEventListener('mouseenter', handleMouseEnter);
  });

  // Function to handle click event outside the slider
  function handleClickOutside(event) {
    if (!event.target.closest('.image-slider-container')) {
      // Remove the 'middle-slide' class from all slides
      slides.forEach(slide => {
        slide.classList.remove('middle-slide');
      });
      // Add the 'middle-slide' class to the middle slide again
      slides[1].classList.add('middle-slide');
    }
  }

  // Add click event listener to the document
  document.addEventListener('click', handleClickOutside);

  // Function to handle scroll event
  function handleScroll() {
    // Remove the 'middle-slide' class from all slides
    slides.forEach(slide => {
      slide.classList.remove('middle-slide');
    });
    // Add the 'middle-slide' class to the middle slide again
    slides[1].classList.add('middle-slide');
  }

  // Add scroll event listener to the document
  document.addEventListener('scroll', handleScroll);



   // JavaScript code to toggle opening and closing of project boxes
   function toggleProject(element) {
    element.classList.toggle('clicked'); // Toggle the 'clicked' class
  }
  

  //footer icon

  document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopButton = document.getElementById('scroll-to-top');
  
    // Add click event listener to the arrow icon
    scrollToTopButton.addEventListener('click', function() {
      // Scroll to the top of the page with smooth behavior
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });

  
  


  
  

