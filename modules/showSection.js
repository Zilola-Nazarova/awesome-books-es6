export const showSection = (sectionId) => {
  const allSections = document.querySelectorAll('section');
  allSections.forEach((section) => {
    section.classList.add('hidden');
  });

  const displayedSection = document.getElementById(sectionId);
  displayedSection.classList.remove('hidden');
};