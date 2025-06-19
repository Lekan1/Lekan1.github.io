document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Scroll animations for elements
  const observerOptions = { threshold: 0.1 };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.project-card, .about-item').forEach(el => {
    el.classList.add('hidden'); // Initial state
    observer.observe(el);
  });
});

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.remove("transparent");
    nav.classList.add("shrink");
  } else {
    nav.classList.add("transparent");
    nav.classList.remove("shrink");
  }
});

function toggleImage() {
  const img = document.getElementById("profile-pic");
  img.classList.toggle("expanded");
}

const modal = document.getElementById('cvModal');
const trigger = document.querySelector('.cv-trigger');
const closeBtn = document.querySelector('.cv-close');

  trigger.addEventListener('click', () => {
    modal.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  // Optional: Close when clicking outside modal content
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  function openPhotoModal() {
    const modal = document.getElementById("photo-modal");
    modal.style.display = "flex";
    // Allow browser to render before applying transition
    setTimeout(() => modal.classList.add("active"), 10);
  }
  
  function closePhotoModal() {
    const modal = document.getElementById("photo-modal");
    modal.classList.remove("active");
    // Wait for transition to finish before fully hiding
    setTimeout(() => modal.style.display = "none", 400); // match the CSS transition duration
  }
