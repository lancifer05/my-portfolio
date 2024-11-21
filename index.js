document.addEventListener('DOMContentLoaded', () => {
    const switchButton = document.querySelector('.switch');
    const body = document.body;
  
    // Check for saved theme preference in localStorage
    if (localStorage.getItem('theme') === 'light') {
      body.classList.add('lightmode');
    }
  
    // Toggle theme and save preference
    switchButton.addEventListener('click', () => {
      // Apply a slight delay to see the transition effect
      setTimeout(() => {
        body.classList.toggle('lightmode');
  
        // Save the current theme preference in localStorage
        if (body.classList.contains('lightmode')) {
          localStorage.setItem('theme', 'light');
        } else {
          localStorage.removeItem('theme');
        }
      }, 100); // 100ms delay for a smoother transition
    });
  });
  