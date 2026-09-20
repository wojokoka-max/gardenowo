(() => {
  const heights = { Lawenda: 0.6, 'Hortensja bukietowa': 2.2, 'Miskant chiński': 1.8, 'Szałwia omszona': 0.5, Paproć: 1, Bukszpan: 1 };
  const sync = () => document.querySelectorAll('.plan-plant').forEach(plant => {
    const name = plant.querySelector('.plant-label')?.textContent?.trim();
    const height = heights[name] || 1;
    const size = Math.round(44 + height * 26);
    plant.style.setProperty('--real-height', `${height}m`);
    if (!document.querySelector('.plan.close-view, .plan.group-mode')) {
      plant.style.width = `${size}px`;
      plant.style.height = `${size}px`;
    }
    plant.title = `${name} · wysokość docelowa: ${height} m`;
  });
  new MutationObserver(sync).observe(document.body, { childList: true, subtree: true });
  window.addEventListener('load', sync);
})();
