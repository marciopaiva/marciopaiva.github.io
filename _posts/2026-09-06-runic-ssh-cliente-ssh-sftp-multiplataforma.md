---
title: "Runic SSH: um cliente SSH open source em Rust e Tauri"
description: "Apresento o Runic SSH, um cliente SSH/SFTP multiplataforma que venho construindo em Rust e Tauri: por que decidi criar mais um cliente SSH, o que já funciona hoje e como o projeto foi pensado para ser pequeno, auditável e fácil de entregar para outra pessoa manter."
tags: [Tecnologia, Rust, Tauri, SSH, Open Source, DevOps]
style: fill
color: primary
comments: true
---

Olá, leitor(a)!

Quero apresentar um projeto pessoal que venho desenvolvendo nas últimas semanas: o **[Runic SSH](https://github.com/marciopaiva/runic-ssh)**, um cliente SSH/SFTP multiplataforma, open source, construído com **Rust** e **Tauri**.

## 1. Por que mais um cliente SSH?

Conectar em um servidor é algo que qualquer sysadmin ou desenvolvedor faz dezenas de vezes por dia, mas as ferramentas para isso costumam ser antigas ou pagas. As partes boas das ferramentas pagas não são um problema técnico difícil de resolver: um gerenciador de sessões agradável de usar, SFTP ao lado do terminal, túneis que não dependem de decorar linha de comando. Elas simplesmente estão atrás de uma licença.

O Runic SSH é uma tentativa de colocar isso em algo gratuito, pequeno o suficiente para ser auditado, e que pertença a quem usa. É pensado para sysadmins, engenheiros de DevOps e desenvolvedores que precisam de uma ferramenta madura onde importa e que possa crescer conforme a comunidade precisar.

Também é pensado para ser entregue a outra pessoa manter: cada decisão de arquitetura é registrada (o que foi escolhido, o que custou, o que passou a não ser mais possível), e os checks que validam uma mudança rodam em poucos comandos que qualquer pessoa consegue executar.

## 2. Por que "Runic"

O nome vem dos alfabetos rúnicos, os símbolos usados no norte da Europa para escrever, lembrar e atravessar distâncias.

Uma sessão SSH não é tão diferente: uma pequena sequência de caracteres digitada em um terminal que abre uma porta para uma máquina em outro lugar. O protocolo é a runa; a conexão é a travessia. É também um lembrete da outra promessa do projeto: ser pequeno o bastante para ser lido, auditado e confiável.

## 3. Stack técnica

- **Rust** no núcleo da aplicação, priorizando segurança de memória e desempenho.
- **Tauri** para empacotar a interface como aplicativo desktop nativo em **Windows, macOS e Linux**, com um binário pequeno se comparado a alternativas baseadas em Electron.
- **xterm.js** para o terminal embutido, com sessões mantidas vivas entre trocas de aba.
- Integração com o **keychain do sistema operacional** para resolver credenciais no momento do uso, sem que elas cheguem em texto plano até a interface.

## 4. O que já funciona hoje

Alguns destaques do que já está implementado:

- **Verificação real de host keys**: uma chave desconhecida pede confirmação mostrando o fingerprint, uma chave alterada bloqueia a conexão e pede que o hostname seja digitado novamente, e chaves marcadas como `@revoked` ou `@cert-authority` são recusadas sem opção de contornar.
- **Credenciais em janela própria**, com três formas de lembrar: usar uma única vez, manter até a aplicação fechar, ou salvar no keychain.
- **Terminal por sessão**, com scrollback e barra de status mostrando latência e bytes trafegados.
- **Copiar e colar** com atalhos que diferenciam seleção de interrupção, e aviso antes de colar múltiplas linhas em um shell que não sinaliza suporte a colagem em bloco.
- **Grupos de sessão**, de duas a nove divisões de tela, com terminal, formulário de host e configurações representados como abas dentro de cada grupo.
- **Acesso via bastion/jump host**: uma sessão salva pode apontar para outra sessão salva como ponto de acesso, com as duas pontas autenticando de ponta a ponta e o bastion repassando apenas tráfego cifrado que ele mesmo não consegue ler.
- **Digitação simultânea em vários grupos**, desligada por padrão e sinalizada visualmente sempre que ativa, já que é uma decisão de segurança e não apenas uma conveniência.

## 5. Onde acompanhar

O projeto é open source, sob licença MIT, e está no GitHub:

- [github.com/marciopaiva/runic-ssh](https://github.com/marciopaiva/runic-ssh)

Ainda é um projeto jovem e em desenvolvimento ativo, mas já é usável no dia a dia. Se você trabalha muito no terminal e sofre com as opções atuais de cliente SSH, vale dar uma olhada — e contribuições, issues e sugestões são bem-vindas.
