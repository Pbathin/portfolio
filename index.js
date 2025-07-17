// Mobile menu toggle
document.getElementById("menu-toggle").addEventListener("click", function () {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
});

// Typing animation
document.addEventListener("DOMContentLoaded", function () {
  const typedElement = document.getElementById("typed");
  const words = [
    "Full Stack Developer",
    "Web Developer",
    "Problem Solver",
    "Tech Enthusiast",
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 200;
  let deletingSpeed = 100;
  let endPause = 2000;
  let startTyping = true;

  function type() {
    const currentWord = words[wordIndex];

    if (startTyping) {
      typedElement.textContent = currentWord.substring(0, charIndex);

      if (!isDeleting) {
        charIndex++;

        if (charIndex === currentWord.length) {
          isDeleting = true;
          setTimeout(type, endPause);
          return;
        }
      } else {
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }

      const speed = isDeleting ? deletingSpeed : typingSpeed;
      setTimeout(type, speed);
    }
  }

  type();

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });

        // Close mobile menu if open
        const mobileMenu = document.getElementById("mobile-menu");
        mobileMenu.classList.add("hidden");
      }
    });
  });

  // Back to top button
  const backToTopButton = document.getElementById("back-to-top");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.remove("opacity-0", "invisible");
    } else {
      backToTopButton.classList.add("opacity-0", "invisible");
    }
  });

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Form submission
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for your message! I will get back to you soon.");
      form.reset();
    });
  }
});
