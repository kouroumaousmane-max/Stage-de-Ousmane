// ===== GESTION DES LIKES =====
let nblikes = localStorage.getItem("nblikes") || 0;
const boutonLike = document.getElementById("mon-bouton-like");

if (boutonLike) {
    boutonLike.textContent = `J'aime (${nblikes})`;
    boutonLike.addEventListener("click", () => {
        nblikes++;
        localStorage.setItem("nblikes", nblikes);
        boutonLike.textContent = `J'aime (${nblikes})`;
    });
}

// ===== GESTION DU THÈME SOMBRE / CLAIR =====
const themeToggleBtn = document.getElementById('theme-toggle');

function initTheme() {
  // Par défaut, on peut démarrer en 'dark' si on veut coller au style initial d'Ousmane
  const savedTheme = localStorage.getItem('theme') || 'dark';
  
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    updateThemeButton(true);
  } else {
    document.body.classList.remove('dark-theme');
    updateThemeButton(false);
  }
}

function updateThemeButton(isDark) {
  if (themeToggleBtn) {
    if (isDark) {
      themeToggleBtn.textContent = '☀️ Mode Clair';
    } else {
      themeToggleBtn.textContent = '🌙 Mode Sombre';
    }
  }
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', function() {
    const isDarkMode = document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    updateThemeButton(isDarkMode);
  });
}

