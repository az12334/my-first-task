

//nav bar ka leya hai ya code
const navLinks = document.querySelectorAll(".nav-effect");
navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const rect = this.getBoundingClientRect();

    for (let i = 0; i < 15; i++) {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.textContent = "❤️";

      const offsetX = Math.random() * rect.width;
      heart.style.left = rect.left + offsetX + "px";
      heart.style.top = rect.top + "px";

      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 3000);
    }
  });
//ya hai home section ka code

// Target the CTA button
const exploreBtn = document.querySelector('.cta-button');

exploreBtn.addEventListener('click', () => {
  // 🎯 Scroll to projects section
  const target = document.getElementById('projects');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

  // ✨ Emoji trail burst
  for (let i = 0; i < 25; i++) {
    const emoji = document.createElement('div');
    emoji.innerText = ['✨', '🚀', '💻'][Math.floor(Math.random() * 3)];
    emoji.style.cssText = `
      position: fixed;
      left: ${Math.random() * 100}vw;
      top: ${Math.random() * 10 + 40}vh;
      font-size: 1.8rem;
      animation: floatUp 2s ease-out forwards;
      z-index: 9999;
      pointer-events: none;
    `;
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 2000);
  }
});


});
//about section ka leya
function showSection(id) {
    const sections = document.querySelectorAll(".about-content");
    sections.forEach(sec => sec.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
  }



  // ya hai project section ka leya 
  const shuffleBtn = document.getElementById('shuffleProjects');
const projectsList = document.querySelector('.projects-list');

shuffleBtn.addEventListener('click', () => {
  const cards = Array.from(projectsList.children);
  const shuffled = cards.sort(() => 0.5 - Math.random());
  projectsList.innerHTML = '';
  shuffled.forEach(card => projectsList.appendChild(card));
});


// ya hai contact section ka code
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const popup = document.createElement('div');
  popup.innerText = "💌 Successfully message sent, thank you Sir!";
  popup.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffffff;
    color: #1e3a8a;
    padding: 18px 28px;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 12px;
    z-index: 9999;
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
    animation: fadeInPop 0.5s ease-in-out forwards;
  `;
  document.body.appendChild(popup);
  for (let i = 0; i < 30; i++) {
    const emoji = document.createElement('div');
    emoji.innerText = ['💖', '❤️', '💘'][Math.floor(Math.random() * 3)];
    emoji.style.cssText = `
      position: fixed;
      left: ${Math.random() * 100}vw;
      top: -40px;
      font-size: 2rem;
      animation: fallEmoji 2.5s ease-in forwards;
      z-index: 9999;
      pointer-events: none;
    `;
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 2500);
  }
  setTimeout(() => {
    popup.remove();
    form.reset();
  }, 3000);
});
