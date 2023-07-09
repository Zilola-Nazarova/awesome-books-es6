const init = () => {
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      navLinks.forEach((navLink) => {
        navLink.classList.remove('active');
      });

      link.classList.add('active');
    });
  });
}

export { init };