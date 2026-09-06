# Insights4YOU

“Iluminando caminhos para soluções mais inteligentes”
Porque cada insight pode ser o ponto de partida para sua próxima grande ideia.

## Sobre

Este é o repositório do site pessoal de Marcio Paiva Barbosa, um arquiteto de soluções. O site é construído com Jekyll e hospedado no GitHub Pages, usando o tema remoto [`insights4you-jekyll-theme`](https://github.com/marciopaiva/insights4you-jekyll-theme).

## Estrutura do Projeto

- `_config.yml`: configuração do Jekyll (título, autor, plugins, coleções etc.).
- `_data`: certificações e habilidades exibidas na página Sobre.
- `_includes/about/skills.html`: include local (não faz parte do tema) usado para renderizar as listas de habilidades/certificações como barras de progresso.
- `_posts`: posts do blog.
- `_projects`: projetos em destaque na página de Projetos (nome, ferramentas, descrição, link).
- `pages`: páginas do site (início, sobre, projetos, blog, tags, 404).
- `assets`: favicon e imagens usadas nos posts.
- `Gemfile`: dependências Ruby do Jekyll.

O layout, os estilos e os demais includes vêm do tema remoto `insights4you-jekyll-theme`, não deste repositório.

## Funcionalidades

- **Blog**: posts sobre tecnologia, inovação e projetos pessoais, com comentários via [Giscus](https://giscus.app) (GitHub Discussions).
- **Projetos**: projetos locais em destaque + repositórios com estrela no GitHub, buscados automaticamente via `jekyll-github-metadata`.
- **Links Sociais**: links para LinkedIn, GitHub e outros perfis.

## Como Executar Localmente

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/marciopaiva/marciopaiva.github.io.git
    cd marciopaiva.github.io
    ```

2. **Instale as dependências**:
    ```bash
    bundle install
    ```

3. **Execute o Jekyll**:
    ```bash
    bundle exec jekyll serve
    ```

4. **Acesse o site**:
    Abra o navegador e vá para `http://localhost:4000`.

## Como Contribuir

1. **Fork o repositório**.
2. **Crie uma branch**:
    ```bash
    git checkout -b minha-nova-feature
    ```
3. **Faça suas alterações e commit**:
    ```bash
    git commit -am 'Adiciona nova feature'
    ```
4. **Envie para o repositório remoto**:
    ```bash
    git push origin minha-nova-feature
    ```
5. **Abra um Pull Request**.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

- **LinkedIn**: [Marcio Paiva Barbosa](https://www.linkedin.com/in/marcio-paiva-barbosa)
- **GitHub**: [marciopaiva](https://github.com/marciopaiva)
- **E-mail**: [mpaivabarbosa@gmail.com](mailto:mpaivabarbosa@gmail.com)
