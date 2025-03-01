document.addEventListener('DOMContentLoaded', function () {
    // Inicializa tooltips
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems);

    // Obter informações da página
    const pageTitle = encodeURIComponent(document.querySelector('.post-title h1').innerText);
    const pageUrl = encodeURIComponent(window.location.href);

    // Gerar links de compartilhamento
    document.getElementById('share-twitter').href = `https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageUrl}`;
    document.getElementById('share-facebook').href = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
    document.getElementById('share-linkedin').href = `https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}&title=${pageTitle}`;
    document.getElementById('share-whatsapp').href = `https://wa.me/?text=${pageTitle} - ${pageUrl}`;
});

// Tema Escuro
let isDarkMode = localStorage.getItem('darkTheme') === 'true';
function applyTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');

    if (isDarkMode) {
        body.classList.add('dark-theme');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        body.classList.remove('dark-theme');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

// Aplica o tema salvo ao carregar a página
applyTheme();

// Alterna entre temas claro e escuro
document.getElementById('toggle-theme').addEventListener('click', function () {
    isDarkMode = !isDarkMode;
    applyTheme();
    localStorage.setItem('darkTheme', isDarkMode);
});

