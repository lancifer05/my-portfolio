document.addEventListener('DOMContentLoaded', () => {
    const switchButton = document.querySelector('.switch');
    const body = document.body;
  
    // Check ng saved theme preference sa localStorage
    if (localStorage.getItem('theme') === 'light') {
      body.classList.add('lightmode');
    }
  
    // Toggle theme and save preference
    switchButton.addEventListener('click', () => {
      body.classList.toggle('lightmode');
  
      // Save ng theme preference in localStorage
      if (body.classList.contains('lightmode')) {
        localStorage.setItem('theme', 'light');
      } else {
        localStorage.removeItem('theme');
      }
    });
  });
  