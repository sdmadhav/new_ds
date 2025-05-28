// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Dark mode toggle example (assumes a button with id 'darkModeToggle')
  const darkModeToggle = document.getElementById('darkModeToggle');
  if(darkModeToggle){
    darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      // Save preference in localStorage
      if(document.body.classList.contains('dark-mode')){
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  }
  
  // On page load, apply saved theme preference
  window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme === 'dark'){
      document.body.classList.add('dark-mode');
    }
  });
  