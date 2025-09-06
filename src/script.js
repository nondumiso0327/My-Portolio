const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.slide-left, .slide-right').forEach(el => {
  observer.observe(el);
});

