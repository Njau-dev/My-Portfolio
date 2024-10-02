const themeToggler = document.getElementById('theme-toggler');

// Add an event listener to toggle dark mode

themeToggler.addEventListener('click', () => {

  document.body.classList.toggle('dark-mode');
  

  // Optionally, add the 'dark-mode' class to specific elements if needed
  
  const elementsToToggle = document.querySelectorAll('h1, h2, a, button, nav');
  
  elementsToToggle.forEach((el) => {
    el.classList.toggle('dark-mode');
  });

    //change the button icon when toggled
  if (document.body.classList.contains('dark-mode')) {
    themeToggler.textContent = '☀️'; 
  } else {
    themeToggler.textContent = '🌙';
  }
});
