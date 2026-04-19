document.addEventListener("DOMContentLoaded", function() {

  // ─── TESTIMONIAL CAROUSEL ───
  let testiIdx = 0;
  let current = 0;

  const track = document.getElementById('testiTrack');
  const dots = document.querySelectorAll('.testi-dot');
  const total = dots.length;

  if (track && total > 0) {
    function goTesti(i) {
      testiIdx = i;
      track.style.transform = `translateX(-${i * 100}%)`;
      dots.forEach((d, j) => d.classList.toggle('active', j === i));
    }

    setInterval(() => {
      current = (current + 1) % total;
      goTesti(current);
    }, 6500);
  }

  // ─── FAQ ───
  window.toggleFaq = function(btn) {
    const item = btn.closest('.faq-item');
    if (!item) return;

    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

    if (!isOpen) item.classList.add('open');
  }

  // ─── COUNTDOWN ───
  let endTime = Date.now() + 24 * 60 * 60 * 1000;

  function tick() {
    const diff = Math.max(0, endTime - Date.now());

    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    const hEl = document.getElementById('ctHour');
    const mEl = document.getElementById('ctMin');
    const sEl = document.getElementById('ctSec');

    if (hEl) hEl.textContent = String(h).padStart(2, '0');
    if (mEl) mEl.textContent = String(m).padStart(2, '0');
    if (sEl) sEl.textContent = String(s).padStart(2, '0');
  }

  setInterval(tick, 1000);
  tick();

  // ─── FLOATING NOTIF ───
  const notifs = [
    { name: 'Alma dari Jakarta', text: 'baru saja membeli Paket All-in-One' },
    { name: 'Della dari Tangerang', text: 'membeli Brightening Serum' },
    { name: 'Dewi dari Bandung', text: 'baru saja membeli Night Cream' },
    { name: 'Rahmah dari Bekasi', text: 'membeli Paket All-in-One' },
    { name: 'Ayu dari Medan', text: 'baru saja membeli Day Cream' },
  ];

  const notifEl = document.getElementById('floatingNotif');
  let nIdx = 0;

  function showNotif() {
    if (!notifEl) return;

    const nameEl = document.getElementById('notifName');
    const textEl = document.getElementById('notifText');

    if (!nameEl || !textEl) return;

    const n = notifs[nIdx % notifs.length];

    nameEl.textContent = n.name;
    textEl.textContent = n.text;

    notifEl.style.display = 'block';
    notifEl.style.animation = 'slideIn .4s ease';

    setTimeout(() => {
      notifEl.style.animation = 'slideOut .4s ease forwards';
      setTimeout(() => {
        notifEl.style.display = 'none';
        nIdx++;
      }, 400);
    }, 3500);
  }

  if (notifEl) {
    setTimeout(() => {
      showNotif();
      setInterval(showNotif, 7000);
    }, 2000);
  }

});

// ─── BURGER MENU ───
const burger = document.getElementById('burger');
const nav = document.querySelector('.nav-links');

if (burger && nav) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    nav.classList.toggle('active');
  });
}