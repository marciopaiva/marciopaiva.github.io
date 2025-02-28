async function fetchGitHubRepos() {
    const username = "marciopaiva";
    const apiUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Erro ao buscar repositórios");
        const repos = await response.json();

        const sortedRepos = repos
            .filter(repo => !repo.fork)
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 6);

        renderRepos(sortedRepos);
    } catch (error) {
        console.error(error);
        document.getElementById("repo-list").innerHTML = "<p>Não foi possível carregar os repositórios. Tente novamente mais tarde.</p>";
    }
}

function renderRepos(repos) {
    const repoList = document.getElementById("repo-list");
    repoList.innerHTML = "";

    repos.forEach(repo => {
        const repoCard = document.createElement("div");
        repoCard.classList.add("repo-card");

        // Ícone da linguagem usando FontAwesome
        let languageIcon = "";
        switch (repo.language) {
            case "JavaScript":
                languageIcon = '<i class="fab fa-js-square"></i>';
                break;
            case "Python":
                languageIcon = '<i class="fab fa-python"></i>';
                break;
            case "Java":
                languageIcon = '<i class="fab fa-java"></i>';
                break;
            default:
                languageIcon = '<i class="fas fa-code"></i>'; // Ícone genérico
        }

        repoCard.innerHTML = `
            <!-- Linha 1: Nome do Repositório -->
            <div class="repo-title">
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>

            <!-- Linha 2: Descrição do Repositório -->
            <div class="repo-description">
                ${repo.description || "Sem descrição."}
            </div>

            <!-- Linha 3: Informações Adicionais -->
            <div class="repo-meta">
                <span class="repo-stars">${repo.stargazers_count} ★</span>
                <span class="repo-forks">${repo.forks_count} ⑂</span>
                <span class="repo-issues">${repo.open_issues_count || 0} ⚠</span>
            </div>
        `;
        repoList.appendChild(repoCard);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    fetchGitHubRepos();

    const filters = document.querySelectorAll(".filters button");
    filters.forEach(button => {
        button.addEventListener("click", () => {
            filters.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filter = button.dataset.filter;
            filterRepos(filter);
        });
    });
});

function filterRepos(filter) {
    const allRepos = Array.from(document.querySelectorAll(".repo-card"));
    allRepos.forEach(repo => {
        const language = repo.querySelector(".repo-language").textContent.trim();
        const stars = parseInt(repo.querySelector(".repo-stars").textContent);

        if (filter === "all" || language.includes(filter) || (filter === "stars" && stars > 0)) {
            repo.style.display = "block";
        } else {
            repo.style.display = "none";
        }
    });
}

// Função para alternar o tema
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById("theme-icon");

    if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
        themeIcon.classList.remove("fa-sun"); // Remove o ícone de sol
        themeIcon.classList.add("fa-moon");  // Adiciona o ícone de lua
    } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        localStorage.setItem("theme", "light");
        themeIcon.classList.remove("fa-moon"); // Remove o ícone de lua
        themeIcon.classList.add("fa-sun");    // Adiciona o ícone de sol
    }
}

// Função para aplicar o tema salvo no localStorage
function applySavedTheme() {
    const savedTheme = localStorage.getItem("theme");
    const body = document.body;
    const themeIcon = document.getElementById("theme-icon");

    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    } else {
        body.classList.add("light-mode");
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    }
}

// Event Listener para o botão de alternância
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", toggleTheme);
    }

    // Aplicar o tema salvo ao carregar a página
    applySavedTheme();
});