---
layout: page
title: Sobre
permalink: /about/
weight: 3
---


# Transformando Ideias em Realidade


## Quem Sou Eu?
<div class="row">
  <div class="col-lg-3 col-md-4 text-center mt-3">
    <div id="container" class="my-2">
    Marcio Paiva Barbosa
    </div>
    <!-- Fine Circle Responsive Image -->
    <div id="container" class="my-2">
      <div id="dummy"></div>
      <div id="element">
        <img src="{{ site.author.image }}" class="circle-image wow animated zoomIn" data-wow-delay=".1s">
      </div>
    </div>
    <div id="container" class="my-2">
    {% include social.html %}
    </div>
  </div>
  <div class="col-lg-9 col-md-9 mt-3">
    Profissional com mais de 30 anos de experiência em Tecnologia da Informação, especializado em arquitetura de soluções e desenvolvimento de sistemas escaláveis e eficientes. Especialista em frameworks como PHP (Zend Framework, Doctrine ORM) , Java (Spring, Hibernate) , JavaScript (Node.js, Angular) , além de linguagens como C++  e Go Language . Possui sólida expertise em bancos de dados relacionais e não relacionais, incluindo Oracle , PostgreSQL , MySQL , Redis , MongoDB  e Kafka , aplicados em ambientes distribuídos e cloud. <br><br>
    Experiência consolidada na implantação e otimização de infraestruturas utilizando tecnologias modernas de automação e orquestração, como Ansible , Terraform , Docker  e Red Hat OpenShift . Habilidoso na definição de arquiteturas robustas para microsserviços, integração de APIs e pipelines de CI/CD, garantindo entregas ágeis e confiáveis.  <br><br>
  </div>
    Com um perfil analítico e orientado a resultados, possui amplo conhecimento em plataformas de cloud pública e privada, incluindo serviços como Azure Red Hat OpenShift , Azure Managed HSM , Azure Service Bus  e Confluent Kafka . Reconhecido por sua capacidade de absorver novas tecnologias e propor soluções inovadoras que otimizam processos e aumentam a eficiência operacional. Espírito empreendedor e foco em resolver desafios complexos, sempre alinhado às melhores práticas do mercado.
</div>

<div class="row">
{% include about/skills.html title="Certificações" source=site.data.certificados %}
</div>

<div class="row">
{% include about/skills.html title="Programming Skills" source=site.data.programming-skills %}
{% include about/skills.html title="Other Skills" source=site.data.other-skills %}
</div>

