function includeHTML() {
  document.querySelectorAll('[data-include]').forEach(async (el) => {
    const file = el.getAttribute('data-include');
    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error(`Error fetching ${file}`);
      const html = await res.text();
      el.innerHTML = html;
    } catch (err) {
      el.innerHTML = `<div style="color:red;">Failed to load ${file}</div>`;
    }
  });
}

// Run when the page loads
window.addEventListener('DOMContentLoaded', includeHTML);