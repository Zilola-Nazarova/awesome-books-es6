// eslint-disable-next-line import/no-unresolved
import showSection from './ShowSection.js';

const navActivate = () => {
  const navLinks = document.querySelectorAll('nav a');
  showSection('welcome');
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
};

export default navActivate;