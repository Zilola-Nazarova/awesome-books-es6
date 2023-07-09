import { showSection } from "./showSection.js"

const init = () => {
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      navLinks.forEach((navLink) => {
        navLink.classList.remove('active');
      });

      link.classList.add('active');

      const sectionId = link.getAttribute('href').substring(1);
      showSection(sectionId);
    });
  });
}

export { init };