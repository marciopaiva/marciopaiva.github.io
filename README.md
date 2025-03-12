# Insights4YOU

“Iluminando caminhos para soluções mais inteligentes”  
Porque cada insight pode ser o ponto de partida para sua próxima grande ideia.

## Sobre

Este é o repositório do site pessoal de Marcio Paiva Barbosa, um arquiteto de soluções. O site é construído utilizando Jekyll e hospedado no GitHub Pages. Ele contém artigos, repositórios populares e informações sobre Marcio.

## Estrutura do Projeto

- `_config.yml`: Arquivo de configuração do Jekyll.
- `_includes`: Contém arquivos HTML que são incluídos em outras páginas.
  - `articles-section.html`: Seção de artigos.
  - `footer.html`: Rodapé do site.
  - `header.html`: Cabeçalho do site.
  - `repositories-section.html`: Seção de repositórios.
  - `theme-switcher.html`: Alternador de tema.
- `_layouts`: Contém layouts para as páginas.
  - `default.html`: Layout padrão.
  - `post.html`: Layout para posts.
- `_posts`: Contém posts do blog.
  - `2025-03-01-boas-vindas.md`: Post de boas-vindas.
- `assets`: Contém arquivos estáticos como CSS, imagens e JavaScript.
  - `css/style.css`: Arquivo de estilos.
  - `images/avatar.jpg`: Imagem de avatar.
  - `images/site-cover.png`: Imagem de capa do site.
  - `js/script.js`: Arquivo de scripts.
- `index.html`: Página inicial do site.
- `Gemfile` e `Gemfile.lock`: Arquivos de configuração para gerenciar dependências Ruby.
- `node_modules`: Diretório de dependências Node.js, geralmente gerado pelo npm.

## Funcionalidades

- **Tema Claro/Escuro**: O site suporta alternância entre tema claro e escuro.
- **Artigos**: Seção de artigos com posts sobre tecnologia e inovação.
- **Repositórios Populares**: Seção que exibe os repositórios mais populares do GitHub de Marcio.
- **Links Sociais**: Links para perfis sociais de Marcio.

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

- **LinkedIn**: [Marcio Paiva Barbosa](https://www.linkedin.com/in/marciopaiva)
- **GitHub**: [marciopaiva](https://github.com/marciopaiva)
