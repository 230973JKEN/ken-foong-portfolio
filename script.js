// Highlight nav link on scroll
const links = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
  links.forEach(link => {
    const sec = document.querySelector(link.hash);
    if (
      sec.offsetTop <= window.scrollY + 60 &&
      sec.offsetTop + sec.offsetHeight > window.scrollY
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// Dark mode toggle
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Modal functionality
function showModal(id) {
  document.getElementById(id).style.display = 'block';
}
function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// Certificate lightbox
function openCertificate(src) {
  const modal = document.getElementById('certificateModal');
  const image = document.getElementById('certImage');
  modal.style.display = 'block';
  image.src = src;
}
function closeCertificate() {
  document.getElementById('certificateModal').style.display = 'none';
}

// Accordion toggle
function toggleAccordion(button) {
  const panel = button.nextElementSibling;
  const isActive = panel.style.display === 'block';
  document.querySelectorAll('.accordion .panel').forEach(p => p.style.display = 'none');
  panel.style.display = isActive ? 'none' : 'block';
}
