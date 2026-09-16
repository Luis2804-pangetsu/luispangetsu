// ============ SCROLL REVEAL ============
const revealEls = document.querySelectorAll(
  '.cover__text, .cover__photo, .about__title, .about__body, .profile-box'
);
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));

// ============ SMOOTH NAV HIGHLIGHT ============
const navLinks = document.querySelectorAll('.nav__menu a');
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 150;
  
  document.querySelectorAll('section').forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      navLinks.forEach(link => {
        link.style.opacity = link.getAttribute('href') === '#' + section.id ? '1' : '.6';
      });
    }
  });
});

// ============ PROFILE PHOTO FALLBACK ============
const profilePhoto = document.getElementById('profilePhoto');
if(profilePhoto) {
  profilePhoto.addEventListener('error', () => {
    profilePhoto.style.display = 'none';
    profilePhoto.parentElement.innerHTML += `<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;color:#1a1a1a;font-family:'Playfair Display',serif;"> 
      <div style="font-size:4rem;font-weight:900;">LUIS</div> 
      <div style="font-size:.7rem;letter-spacing:.3em;margin-top:.5rem;">PHOTO NOT FOUND</div> 
    </div>`;
  });
}

// ============ PARALLAX RINGAN PADA FOTO ============
window.addEventListener('scroll', () => {
  const photo = document.querySelector('.cover__photo-frame');
  if (photo) {
    const scrolled = window.scrollY;
    photo.style.transform = `translateY(${scrolled * 0.05}px)`;
  }
});
