if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0 }
  );

  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
}
